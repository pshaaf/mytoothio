import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { otpVerificationSchema, type OtpVerification } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";

export const OtpVerificationPage = (): JSX.Element => {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [timeLeft, setTimeLeft] = useState(60);
  
  const form = useForm<OtpVerification>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: {
      code: "",
    },
  });

  // Countdown timer for resend
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const onSubmit = (data: OtpVerification) => {
    // Demo: Accept any 6-digit code for demonstration purposes
    if (data.code && data.code.length === 6 && /^\d{6}$/.test(data.code)) {
      toast({
        title: "Verification successful",
        description: "Redirecting to your dashboard...",
      });
      // Navigate to landing page after successful verification
      setTimeout(() => {
        setLocation("/dashboard");
      }, 1000);
    } else {
      toast({
        title: "Invalid code",
        description: "Please enter a 6-digit verification code.",
        variant: "destructive",
      });
      form.reset();
    }
  };

  const handleResendCode = () => {
    setTimeLeft(60);
    toast({
      title: "Code sent",
      description: "A new verification code has been sent to your phone.",
    });
  };

  const { watch } = form;
  const code = watch("code");
  const isFormValid = code.length === 6 && form.formState.isValid;

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
                        Enter verification code
                      </h1>
                      <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#535861] text-[length:var(--text-md-regular-font-size)] text-center tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                        Demo: Enter any 6-digit code to continue
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col max-w-[720px] items-center gap-6 px-4 py-0 relative w-full flex-[0_0_auto]">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <FormLabel className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#414651] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                      Verification Code
                    </FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        data-testid="input-otp"
                      >
                        <InputOTPGroup className="gap-2">
                          <InputOTPSlot 
                            index={0} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                          <InputOTPSlot 
                            index={1} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                          <InputOTPSlot 
                            index={2} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                          <InputOTPSlot 
                            index={3} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                          <InputOTPSlot 
                            index={4} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                          <InputOTPSlot 
                            index={5} 
                            className="w-12 h-12 text-center border border-[#d5d6d9] rounded-lg font-text-md-semibold"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Button
                  type="submit"
                  disabled={!isFormValid}
                  data-testid="button-verify"
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
                      Verify
                    </span>
                  </span>
                </Button>

                {timeLeft > 0 ? (
                  <p className="text-center font-text-sm-regular text-[#535861]">
                    Resend code in {timeLeft}s
                  </p>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendCode}
                    data-testid="button-resend"
                    className="text-center font-text-sm-medium text-[#0069dc] hover:text-[#005ec6] underline"
                  >
                    Resend code
                  </button>
                )}
              </div>
            </form>
          </Form>
        </div>

        <ContactSection />
      </div>
    </div>
  );
};
