// seedData.js
module.exports = {
    // 1. Locations
    locations: [
        "Chennai", "Alathur", "Kollam", "Trivandrum", "Bangalore",
        "Palakkad", "Hubli", "Mangalore", "Kochi", "Kozhikode",
        "Thrissur", "Malappuram", "Coimbatore", "Madurai", "Salem",
        "Erode", "Trichy", "Tirupur", "Hyderabad", "Mysore",
        "Belgaum", "Pune", "Noida", "Mumbai", "Delhi"
    ],

    // 2. Designations
    designations: [
        "Senior Consultant",
        "Lead Consultant",
        "Principal Consultant",
        "Technical Consultant",
        "Business Consultant",
        "Strategy Consultant",
        "Management Consultant",
        "Financial Consultant",
        "HR Consultant",
        "Marketing Consultant"
    ],

    // 3. Languages
    languages: [
        "English",
        "Hindi",
        "Tamil",
        "Malayalam",
        "Kannada",
        "Telugu",
        "Marathi",
        "Gujarati",
        "Bengali",
        "Punjabi"
    ],

    // 4. Service Categories
    serviceCategories: [
        { name: "Business Consulting", description: "Strategic business advice and planning" },
        { name: "Career Coaching", description: "Career guidance and professional development" },
        { name: "Financial Planning", description: "Investment and financial management advice" },
        { name: "Marketing Strategy", description: "Digital marketing and brand strategy" },
        { name: "Technology Consulting", description: "IT infrastructure and software solutions" },
        { name: "Legal Advisory", description: "Legal consultation and document review" },
        { name: "Health & Wellness", description: "Personal health and wellness coaching" },
        { name: "Education & Training", description: "Educational programs and skill development" },
        { name: "Real Estate Consulting", description: "Property investment and management advice" },
        { name: "Startup Advisory", description: "Startup guidance and entrepreneurship coaching" }
    ],

    // 5. Tags
    tags: [
        "expert",
        "certified",
        "premium",
        "verified",
        "top-rated",
        "beginner-friendly",
        "advanced",
        "corporate",
        "individual",
        "urgent",
        "discount",
        "new",
        "featured",
        "recommended",
        "bestseller"
    ],

    // 6. Skills
    skills: [
        // Business Consulting skills
        { name: "Strategic Planning", serviceCategoryName: "Business Consulting" },
        { name: "Market Research", serviceCategoryName: "Business Consulting" },
        { name: "Business Development", serviceCategoryName: "Business Consulting" },
        { name: "Risk Management", serviceCategoryName: "Business Consulting" },

        // Career Coaching skills
        { name: "Resume Writing", serviceCategoryName: "Career Coaching" },
        { name: "Interview Coaching", serviceCategoryName: "Career Coaching" },
        { name: "Career Transition", serviceCategoryName: "Career Coaching" },
        { name: "Leadership Development", serviceCategoryName: "Career Coaching" },

        // Financial Planning skills
        { name: "Investment Planning", serviceCategoryName: "Financial Planning" },
        { name: "Tax Planning", serviceCategoryName: "Financial Planning" },
        { name: "Retirement Planning", serviceCategoryName: "Financial Planning" },
        { name: "Wealth Management", serviceCategoryName: "Financial Planning" },

        // Marketing Strategy skills
        { name: "SEO Optimization", serviceCategoryName: "Marketing Strategy" },
        { name: "Social Media Marketing", serviceCategoryName: "Marketing Strategy" },
        { name: "Content Strategy", serviceCategoryName: "Marketing Strategy" },
        { name: "Brand Development", serviceCategoryName: "Marketing Strategy" },

        // Technology Consulting skills
        { name: "Software Architecture", serviceCategoryName: "Technology Consulting" },
        { name: "Cloud Computing", serviceCategoryName: "Technology Consulting" },
        { name: "Cybersecurity", serviceCategoryName: "Technology Consulting" },
        { name: "DevOps", serviceCategoryName: "Technology Consulting" },

        // Legal Advisory skills
        { name: "Contract Review", serviceCategoryName: "Legal Advisory" },
        { name: "Legal Documentation", serviceCategoryName: "Legal Advisory" },
        { name: "Compliance Advisory", serviceCategoryName: "Legal Advisory" },
        { name: "Intellectual Property", serviceCategoryName: "Legal Advisory" },

        // Health & Wellness skills
        { name: "Nutrition Planning", serviceCategoryName: "Health & Wellness" },
        { name: "Fitness Training", serviceCategoryName: "Health & Wellness" },
        { name: "Mental Wellness", serviceCategoryName: "Health & Wellness" },
        { name: "Stress Management", serviceCategoryName: "Health & Wellness" },

        // Education & Training skills
        { name: "Curriculum Design", serviceCategoryName: "Education & Training" },
        { name: "Corporate Training", serviceCategoryName: "Education & Training" },
        { name: "E-Learning Development", serviceCategoryName: "Education & Training" },
        { name: "Skill Assessment", serviceCategoryName: "Education & Training" },

        // Real Estate Consulting skills
        { name: "Property Valuation", serviceCategoryName: "Real Estate Consulting" },
        { name: "Real Estate Investment", serviceCategoryName: "Real Estate Consulting" },
        { name: "Property Management", serviceCategoryName: "Real Estate Consulting" },
        { name: "Commercial Real Estate", serviceCategoryName: "Real Estate Consulting" },

        // Startup Advisory skills
        { name: "Business Plan Development", serviceCategoryName: "Startup Advisory" },
        { name: "Funding Strategy", serviceCategoryName: "Startup Advisory" },
        { name: "Pitch Deck Creation", serviceCategoryName: "Startup Advisory" },
        { name: "Startup Scaling", serviceCategoryName: "Startup Advisory" }
    ],

    // 7. Roles
    roles: [
        { name: "ADMIN", description: "System Administrator with full access", is_system_role: true },
        { name: "CONSULTANT", description: "Service Provider who offers consultations", is_system_role: true },
        { name: "CLIENT", description: "Customer who books consultation sessions", is_system_role: true },
        { name: "SUPPORT_AGENT", description: "Customer support representative", is_system_role: false },
        { name: "MANAGER", description: "Consultant manager for approvals", is_system_role: false }
    ],

    // 8. Permissions
    permissions: [
        // Dashboard
        { name: "DASHBOARD_VIEW", description: "View dashboard", module: "dashboard" },

        // Designations
        { name: "DESIGNATION_VIEW", description: "View designations", module: "designations" },
        { name: "DESIGNATION_CREATE", description: "Create designations", module: "designations" },
        { name: "DESIGNATION_UPDATE", description: "Update designations", module: "designations" },
        { name: "DESIGNATION_DELETE", description: "Delete designations", module: "designations" },

        // Languages
        { name: "LANGUAGE_VIEW", description: "View languages", module: "languages" },
        { name: "LANGUAGE_CREATE", description: "Create languages", module: "languages" },
        { name: "LANGUAGE_UPDATE", description: "Update languages", module: "languages" },
        { name: "LANGUAGE_DELETE", description: "Delete languages", module: "languages" },

        // Skills
        { name: "SKILL_VIEW", description: "View skills", module: "skills" },
        { name: "SKILL_CREATE", description: "Create skills", module: "skills" },
        { name: "SKILL_UPDATE", description: "Update skills", module: "skills" },
        { name: "SKILL_DELETE", description: "Delete skills", module: "skills" },

        // Tags
        { name: "TAG_VIEW", description: "View tags", module: "tags" },
        { name: "TAG_CREATE", description: "Create tags", module: "tags" },
        { name: "TAG_UPDATE", description: "Update tags", module: "tags" },
        { name: "TAG_DELETE", description: "Delete tags", module: "tags" },

        // Locations
        { name: "LOCATION_VIEW", description: "View locations", module: "locations" },
        { name: "LOCATION_CREATE", description: "Create locations", module: "locations" },
        { name: "LOCATION_UPDATE", description: "Update locations", module: "locations" },
        { name: "LOCATION_DELETE", description: "Delete locations", module: "locations" },

        // Users
        { name: "USER_VIEW", description: "View users", module: "users" },
        { name: "USER_CREATE", description: "Create users", module: "users" },
        { name: "USER_UPDATE", description: "Update users", module: "users" },
        { name: "USER_DELETE", description: "Delete users", module: "users" },

        // Roles
        { name: "ROLE_VIEW", description: "View roles", module: "roles" },
        { name: "ROLE_CREATE", description: "Create roles", module: "roles" },
        { name: "ROLE_UPDATE", description: "Update roles", module: "roles" },
        { name: "ROLE_DELETE", description: "Delete roles", module: "roles" },
        { name: "ROLE_ASSIGN_PERMISSION", description: "Assign permissions to roles", module: "roles" },

        // Permissions
        { name: "PERMISSION_VIEW", description: "View permissions", module: "permissions" },
        { name: "PERMISSION_CREATE", description: "Create permissions", module: "permissions" },
        { name: "PERMISSION_UPDATE", description: "Update permissions", module: "permissions" },
        { name: "PERMISSION_DELETE", description: "Delete permissions", module: "permissions" },

        // Consultants
        { name: "CONSULTANT_VIEW", description: "View consultants", module: "consultants" },
        { name: "CONSULTANT_CREATE", description: "Create consultants", module: "consultants" },
        { name: "CONSULTANT_UPDATE", description: "Update consultants", module: "consultants" },
        { name: "CONSULTANT_DELETE", description: "Delete consultants", module: "consultants" },
        { name: "CONSULTANT_APPROVE", description: "Approve consultants", module: "consultants" },
        { name: "CONSULTANT_REJECT", description: "Reject consultants", module: "consultants" },
        { name: "CONSULTANT_BAN", description: "Ban consultants", module: "consultants" },
        { name: "CONSULTANT_SUSPEND", description: "Suspend consultants", module: "consultants" },
        { name: "CONSULTANT_KYC_VIEW", description: "View consultant KYC", module: "consultants" },
        { name: "CONSULTANT_CERTIFICATE_VIEW", description: "View consultant certificates", module: "consultants" },
        { name: "CONSULTANT_ASSIGN_MANAGER", description: "Assign manager to consultant", module: "consultants" },
        { name: "CONSULTANT_PAYOUT_LOCK", description: "Lock consultant payouts", module: "consultants" },

        // Customers
        { name: "CUSTOMER_VIEW", description: "View customers", module: "customers" },
        { name: "CUSTOMER_CREATE", description: "Create customers", module: "customers" },
        { name: "CUSTOMER_UPDATE", description: "Update customers", module: "customers" },
        { name: "CUSTOMER_DELETE", description: "Delete customers", module: "customers" },
        { name: "CUSTOMER_APPROVE", description: "Approve customers", module: "customers" },
        { name: "CUSTOMER_REJECT", description: "Reject customers", module: "customers" },
        { name: "CUSTOMER_BAN", description: "Ban customers", module: "customers" },
        { name: "CUSTOMER_SUSPEND", description: "Suspend customers", module: "customers" },

        // Services
        { name: "SERVICE_VIEW", description: "View services", module: "services" },
        { name: "SERVICE_CREATE", description: "Create services", module: "services" },
        { name: "SERVICE_UPDATE", description: "Update services", module: "services" },
        { name: "SERVICE_DELETE", description: "Delete services", module: "services" },
        { name: "SERVICE_APPROVE", description: "Approve services", module: "services" },
        { name: "SERVICE_REJECT", description: "Reject services", module: "services" },
        { name: "SERVICE_REQ_CHANGES", description: "Request changes for services", module: "services" },

        // Service Categories
        { name: "SERVICE_CATEGORIES_VIEW", description: "View service categories", module: "service_categories" },
        { name: "SERVICE_CATEGORIES_CREATE", description: "Create service categories", module: "service_categories" },
        { name: "SERVICE_CATEGORIES_UPDATE", description: "Update service categories", module: "service_categories" },
        { name: "SERVICE_CATEGORIES_DELETE", description: "Delete service categories", module: "service_categories" },
        { name: "SERVICE_CATEGORIES_APPROVE", description: "Approve service categories", module: "service_categories" },
        { name: "SERVICE_CATEGORIES_REJECT", description: "Reject service categories", module: "service_categories" },

        // Sessions
        { name: "SESSION_VIEW", description: "View sessions", module: "sessions" },
        { name: "SESSION_CREATE", description: "Create sessions", module: "sessions" },
        { name: "SESSION_UPDATE", description: "Update sessions", module: "sessions" },
        { name: "SESSION_DELETE", description: "Delete sessions", module: "sessions" },
        { name: "SESSION_CANCEL", description: "Cancel sessions", module: "sessions" },
        { name: "SESSION_DISPUTE", description: "Create session disputes", module: "sessions" },

        // Finance
        { name: "FINANCE_VIEW", description: "View finance", module: "finance" },
        { name: "FINANCE_PAYOUT_APPROVE", description: "Approve payouts", module: "finance" },
        { name: "FINANCE_TRANSACTION_VIEW", description: "View transactions", module: "finance" },
        { name: "FINANCE_REFUND_PROCESS", description: "Process refunds", module: "finance" },

        // Support
        { name: "SUPPORT_VIEW", description: "View support", module: "support" },
        { name: "SUPPORT_OVERVIEW_TAB", description: "View support overview tab", module: "support" },
        { name: "SUPPORT_TICKET_TAB", description: "View support ticket tab", module: "support" },
        { name: "SUPPORT_DISPUTE_TAB", description: "View support dispute tab", module: "support" },
        { name: "SUPPORT_TICKET_VIEW", description: "View tickets", module: "support" },
        { name: "SUPPORT_TICKET_CREATE", description: "Create tickets", module: "support" },
        { name: "SUPPORT_TICKET_CLOSE", description: "Close tickets", module: "support" },
        { name: "SUPPORT_DISPUTE_CREATE", description: "Create disputes", module: "support" },
        { name: "SUPPORT_DISPUTE_VIEW", description: "View disputes", module: "support" },
        { name: "SUPPORT_RESOLVE_TICKET", description: "Resolve tickets", module: "support" },
        { name: "SUPPORT_DISPUTE_INVESTIGATION", description: "Investigate disputes", module: "support" },

        // Staffs
        { name: "STAFF_VIEW", description: "View staff", module: "staffs" },
        { name: "STAFF_CREATE", description: "Create staff", module: "staffs" },
        { name: "STAFF_UPDATE", description: "Update staff", module: "staffs" },
        { name: "STAFF_DELETE", description: "Delete staff", module: "staffs" },

        // Audit
        { name: "AUDIT_VIEW", description: "View audit logs", module: "audit" },

        // Settings
        { name: "SETTINGS_VIEW", description: "View settings", module: "settings" },
    ],

    // 9. Role permission mappings (simplified)
    rolePermissions: {
        admin: "all", // Gets all permissions
        consultant: [
            "DASHBOARD_VIEW",
            "CONSULTANT_VIEW", "CONSULTANT_UPDATE", "CONSULTANT_KYC_VIEW", "CONSULTANT_CERTIFICATE_VIEW",
            "SERVICE_VIEW", "SERVICE_CREATE", "SERVICE_UPDATE", "SERVICE_DELETE",
            "SESSION_VIEW", "SESSION_CREATE", "SESSION_UPDATE", "SESSION_CANCEL",
            "FINANCE_VIEW", "FINANCE_TRANSACTION_VIEW",
            "SUPPORT_TICKET_CREATE", "SUPPORT_TICKET_VIEW", "SUPPORT_DISPUTE_CREATE", "SUPPORT_DISPUTE_VIEW",
            "SETTINGS_VIEW"
        ],
        client: [
            "DASHBOARD_VIEW",
            "CUSTOMER_VIEW", "CUSTOMER_UPDATE",
            "CONSULTANT_VIEW",
            "SERVICE_VIEW",
            "SESSION_VIEW", "SESSION_CREATE", "SESSION_CANCEL", "SESSION_DISPUTE",
            "SUPPORT_TICKET_CREATE", "SUPPORT_TICKET_VIEW", "SUPPORT_DISPUTE_CREATE", "SUPPORT_DISPUTE_VIEW",
            "SETTINGS_VIEW"
        ],
        support_agent: [
            "DASHBOARD_VIEW",
            "SUPPORT_VIEW", "SUPPORT_OVERVIEW_TAB", "SUPPORT_TICKET_TAB", "SUPPORT_DISPUTE_TAB",
            "SUPPORT_TICKET_VIEW", "SUPPORT_TICKET_CREATE", "SUPPORT_TICKET_CLOSE", "SUPPORT_RESOLVE_TICKET",
            "SUPPORT_DISPUTE_VIEW", "SUPPORT_DISPUTE_CREATE", "SUPPORT_DISPUTE_INVESTIGATION",
            "USER_VIEW",
            "CONSULTANT_VIEW",
            "CUSTOMER_VIEW",
            "SESSION_VIEW",
            "SERVICE_VIEW",
            "SETTINGS_VIEW"
        ],
        manager: [
            "DASHBOARD_VIEW",
            "CONSULTANT_VIEW", "CONSULTANT_APPROVE", "CONSULTANT_REJECT", "CONSULTANT_SUSPEND",
            "CONSULTANT_ASSIGN_MANAGER", "CONSULTANT_KYC_VIEW", "CONSULTANT_CERTIFICATE_VIEW",
            "SERVICE_VIEW", "SERVICE_APPROVE", "SERVICE_REJECT", "SERVICE_REQ_CHANGES",
            "SESSION_VIEW",
            "FINANCE_VIEW", "FINANCE_TRANSACTION_VIEW",
            "SUPPORT_TICKET_VIEW", "SUPPORT_DISPUTE_VIEW",
            "USER_VIEW",
            "CUSTOMER_VIEW",
            "SETTINGS_VIEW"
        ]
    }
};