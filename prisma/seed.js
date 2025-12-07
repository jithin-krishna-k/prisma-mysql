const { PrismaClient } = require("@prisma/client");
const seedData = require("./seedData");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Seed locations
  console.log("📌 Seeding locations...");
  for (const name of seedData.locations) {
    await prisma.locations.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`✅ ${seedData.locations.length} locations seeded`);

  // 2. Seed designations
  console.log("👔 Seeding designations...");
  for (const name of seedData.designations) {
    await prisma.designations.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`✅ ${seedData.designations.length} designations seeded`);

  // 3. Seed languages
  console.log("🗣️ Seeding languages...");
  for (const name of seedData.languages) {
    await prisma.languages.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`✅ ${seedData.languages.length} languages seeded`);

  // 4. Seed service categories FIRST (skills depend on these)
  console.log("📁 Seeding service categories...");
  const createdCategories = [];
  for (const category of seedData.serviceCategories) {
    const created = await prisma.service_category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
    createdCategories.push(created);
  }
  console.log(`✅ ${seedData.serviceCategories.length} service categories seeded`);

  // 5. Seed tags (before skills since no dependencies)
  console.log("🏷️ Seeding tags...");
  for (const name of seedData.tags) {
    await prisma.tags.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`✅ ${seedData.tags.length} tags seeded`);

  // 6. Seed skills (with proper service category IDs)
  console.log("🛠️ Seeding skills...");
  
  // Create a map of category names to IDs
  const categoryMap = {};
  for (const category of createdCategories) {
    categoryMap[category.name] = category.id;
  }

  let skillCount = 0;
  for (const skill of seedData.skills) {
    const categoryId = categoryMap[skill.serviceCategoryName];
    if (categoryId) {
      try {
        await prisma.skills.upsert({
          where: { name: skill.name },
          update: {
            serviceCategoryId: categoryId
          },
          create: {
            name: skill.name,
            serviceCategoryId: categoryId
          },
        });
        skillCount++;
      } catch (error) {
        console.log(`⚠️  Skill "${skill.name}" already exists or error: ${error.message}`);
      }
    } else {
      console.log(`⚠️  Category "${skill.serviceCategoryName}" not found for skill "${skill.name}"`);
    }
  }
  console.log(`✅ ${skillCount} skills seeded`);

  // 7. Seed roles
  console.log("👥 Seeding roles...");
  const createdRoles = {};
  for (const role of seedData.roles) {
    const created = await prisma.roles.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
    createdRoles[role.name] = created;
  }
  console.log(`✅ ${seedData.roles.length} roles seeded`);

  // 8. Seed permissions
  console.log("🔐 Seeding permissions...");
  const createdPermissions = {};
  for (const permission of seedData.permissions) {
    const created = await prisma.permissions.upsert({
      where: { name: permission.name },
      update: {},
      create: permission,
    });
    createdPermissions[permission.name] = created;
  }
  console.log(`✅ ${seedData.permissions.length} permissions seeded`);

  // 9. Seed role-permissions mapping
  console.log("🔗 Mapping role permissions...");
  
  // Helper function to map permissions to roles
  async function mapPermissionsToRole(roleName, permissionNames) {
    const roleId = createdRoles[roleName]?.id;
    if (!roleId) {
      console.log(`⚠️  Role "${roleName}" not found`);
      return;
    }

    let mappedCount = 0;
    for (const permName of permissionNames) {
      const permission = createdPermissions[permName];
      if (!permission) {
        console.log(`⚠️  Permission "${permName}" not found for role "${roleName}"`);
        continue;
      }

      try {
        // First check if the mapping already exists
        const existing = await prisma.role_permissions.findFirst({
          where: {
            role_id: roleId,
            permission_id: permission.id
          }
        });

        if (existing) {
          // Update existing
          await prisma.role_permissions.update({
            where: { id: existing.id },
            data: { allowed: true }
          });
        } else {
          // Create new
          await prisma.role_permissions.create({
            data: {
              role_id: roleId,
              permission_id: permission.id,
              allowed: true
            }
          });
        }
        mappedCount++;
      } catch (error) {
        console.log(`⚠️  Error mapping "${permName}" to "${roleName}": ${error.message}`);
      }
    }
    console.log(`✅ ${mappedCount} permissions mapped to ${roleName}`);
  }

  // Map permissions based on seedData.rolePermissions
  for (const [roleName, permissions] of Object.entries(seedData.rolePermissions)) {
    if (permissions === "all") {
      // Admin gets all permissions
      await mapPermissionsToRole(roleName, Object.keys(createdPermissions));
    } else {
      await mapPermissionsToRole(roleName, permissions);
    }
  }

  console.log("✨ Database seeding completed successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });