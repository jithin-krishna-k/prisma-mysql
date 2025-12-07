import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config()

// Remove the adapter option - PrismaClient doesn't need it
const prisma = new PrismaClient()

import express from 'express'
const app = express()

// Add middleware to parse JSON
app.use(express.json())

// Example route
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' })
})

// Test database connection endpoint
app.get('/test-db', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'OK', message: 'Database connection successful' })
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: 'Database connection failed', error: error.message })
  }
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Health check: http://localhost:${PORT}/health`)
  console.log(`Test DB: http://localhost:${PORT}/test-db`)
  console.log(`Users endpoint: http://localhost:${PORT}/users`)
})

// Handle graceful shutdown
process.on('SIGTERM', async () => {
  await prisma.$disconnect()
  process.exit(0)
})

process.on('SIGINT', async () => {
  await prisma.$disconnect()
  process.exit(0)
})