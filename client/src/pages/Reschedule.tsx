import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { patientVerificationSchema, type PatientVerification } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";

export const Reschedule = (): JSX.Element => {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  
  const form = useForm<PatientVerification>({
    resolver: zodResolver(patientVerificationSchema),
    defaultValues: {
      email: "",
      dateOfBirth: "",
    },
  });

  const onSubmit = (data: PatientVerification) => {
    toast({
      title: "Patient details submitted",
      description: "Sending verification code to your phone...",
    });
    
    // Navigate to OTP verification page
    setTimeout(() => {
      setLocation("/otp-verification");
    }, 1000);
  };

  const { watch } = form;
  const email = watch("email");
  const dateOfBirth = watch("dateOfBirth");
  const isFormValid = email.length > 0 && dateOfBirth.length > 0 && form.formState.isValid;

  return (
    <div className="flex flex-col w-[375px] h-[844px] items-center relative bg-white overflow-hidden">
      <Header showStatusBar={true} />
      
      <img
        className="relative self-stretch w-full flex-[0_0_auto]"
        alt="Header section"
        src="/figmaAssets/header-section.svg"
      />

      <div className="flex flex-col items-center gap-10 pt-0 pb-16 px-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-6 pt-6 pb-0 px-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto] bg-white">
              <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-center gap-8 flex-1 grow flex flex-col relative">
                  <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <h1 className="relative self-stretch mt-[-1.00px] font-display-xs-semibold font-[number:var(--display-xs-semibold-font-weight)] text-[#181d27] text-[length:var(--display-xs-semibold-font-size)] tracking-[var(--display-xs-semibold-letter-spacing)] leading-[var(--display-xs-semibold-line-height)] [font-style:var(--display-xs-semibold-font-style)]">
                        Verify patient details
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-[720px] items-start gap-6 px-4 py-0 relative w-full flex-[0_0_auto]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                          <FormLabel className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#414651] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            Patient Email
                          </FormLabel>
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#0069dc] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            *
                          </span>
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="patient@email.com"
                            data-testid="input-email"
                            className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#717680] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex flex-col items-start gap-1.5 relative flex-1 grow">
                      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]">
                          <FormLabel className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#414651] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            Date of Birth
                          </FormLabel>
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#0069dc] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            *
                          </span>
                        </div>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            data-testid="input-date-of-birth"
                            className="flex items-center gap-2 px-3.5 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg border border-solid border-[#d5d6d9] shadow-shadows-shadow-xs font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#717680] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]"
                          />
                        </FormControl>
                        <FormMessage />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>

        <div className="flex flex-col max-w-screen-sm items-center justify-center gap-4 relative w-full flex-[0_0_auto]">
          <Button
            type="submit"
            disabled={!isFormValid}
            data-testid="button-submit"
            onClick={form.handleSubmit(onSubmit)}
            className={`flex max-w-[343px] items-center justify-center gap-1.5 px-[18px] py-3 relative w-full flex-[0_0_auto] rounded-lg overflow-hidden border border-solid shadow-shadows-shadow-xs h-auto ${
              isFormValid 
                ? "bg-[#0069dc] border-[#0069dc] hover:bg-[#005ec6]" 
                : "bg-neutral-100 border-[#e9e9eb]"
            }`}
          >
            <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
              <span className={`relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)] ${
                isFormValid ? "text-white" : "text-[#a3a7ae]"
              }`}>
                Submit
              </span>
            </span>
          </Button>
        </div>

        <ContactSection />
        
        {/* Logo at bottom */}
        <div className="flex justify-center items-center w-full py-8">
          <img
            src="/figmaAssets/mytoothlogo.png"
            alt="MyTooth Logo"
            className="max-h-14"
          />
        </div>
      </div>
    </div>
  );
};
