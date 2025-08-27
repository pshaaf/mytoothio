import { pgTable, text, serial, integer, boolean, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const patients = pgTable("patients", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  dateOfBirth: date("date_of_birth").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPatientSchema = createInsertSchema(patients).pick({
  email: true,
  dateOfBirth: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

export const patientVerificationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
});

export const otpVerificationSchema = z.object({
  code: z.string().length(6, "Please enter a 6-digit code"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPatient = z.infer<typeof insertPatientSchema>;
export type Patient = typeof patients.$inferSelect;
export type PatientVerification = z.infer<typeof patientVerificationSchema>;
export type OtpVerification = z.infer<typeof otpVerificationSchema>;
