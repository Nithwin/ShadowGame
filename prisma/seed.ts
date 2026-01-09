import { PrismaClient, Role } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import bcrypt from 'bcryptjs'
import * as path from 'path'
import * as dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL is not defined in .env file');
    process.exit(1);
}

const connectionString = process.env.DATABASE_URL

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
    try {
        // Create Admin User
        const adminPassword = await bcrypt.hash('shadowgame', 10);
        const admin = await prisma.user.upsert({
            where: { email: 'shadowgame@gmail.com' },
            update: {
                password: adminPassword,
                role: Role.ADMIN,
                xp: 99999,
                level: 100
            },
            create: {
                email: 'shadowgame@gmail.com',
                name: 'Shadow Admin',
                password: adminPassword,
                role: Role.ADMIN,
                xp: 99999,
                level: 100
            },
        });

        console.log({ admin });

        // Seed Initial Mission: The Cargo Hold
        const mission = await prisma.mission.upsert({
            where: { slug: 'rust-cargo-hold' },
            update: {},
            create: {
                slug: 'rust-cargo-hold',
                title: 'The Cargo Hold',
                description: `
**Objective**: Fix the cargo manifest.

The variable \`crate_id\` is immutable by default in Rust.
You need to make it mutable to change its value.

1. Add the \`mut\` keyword.
2. Change the value to \`501\`.
            `,
                difficulty: 'EASY',
                category: 'RUST',
                xpReward: 100,
                starterCode: `fn main() {
    let crate_id = 500;
    println!("Loading crate: {}", crate_id);

    // TODO: Change crate_id to 501
    // crate_id = 501;
}`,
                testCases: {
                    create: [
                        {
                            input: "",
                            expectedOutput: "Loading crate: 500\nCorrected crate: 501",
                            isHidden: false
                        }
                    ]
                }
            }
        });

        console.log({ mission });

    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
