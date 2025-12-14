module.exports = {
  apps: [
    {
      name: "medusa-api",
      cwd: "/var/www/azores-bloom-candles-server/.medusa/server",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 9000,
        DATABASE_URL: "postgresql://postgres:postgres@localhost:5432/medusa-store",
        REDIS_URL: "redis://localhost:6379",
        STORE_CORS: "https://admin.azoresbloomcandles.com",
        ADMIN_CORS: "https://admin.azoresbloomcandles.com",
        AUTH_CORS: "https://admin.azoresbloomcandles.com",
        JWT_SECRET: "supersecret",
        COOKIE_SECRET: "supersecret",
        MEDUSA_ADMIN_PORT: 0
      }
    }
  ]
}
