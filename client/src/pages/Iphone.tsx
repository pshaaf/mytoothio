import {
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  EditIcon,
  FileCheckIcon,
  NavigationIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { ContactSection } from "@/components/ContactSection";
import { useLocation } from "wouter";

const actionButtons = [
  {
    icon: PhoneIcon,
    label: "Call Office",
  },
  {
    icon: CalendarIcon,
    label: "Add to Calendar",
  },
  {
    icon: NavigationIcon,
    label: "Get Directions",
  },
  {
    icon: EditIcon,
    label: "Modify Visit",
  },
];

const checklistItems = [
  {
    id: 1,
    title: "New Patient (aged 14 and older)",
    completed: true,
    timeEstimate: "Less than 1 minute",
    progress: 100,
  },
  {
    id: 2,
    title: "Emergency contact",
    completed: false,
    timeEstimate: "Less than 1 minute",
    progress: 60,
  },
  {
    id: 3,
    title: "Procedure consent form",
    completed: false,
    timeEstimate: "Less than 1 minute",
    progress: 0,
  },
  {
    id: 4,
    title: "Insurance verification",
    completed: false,
    timeEstimate: "Less than 1 minute",
    progress: 0,
  },
];

export const Iphone = (): JSX.Element => {
  const [, setLocation] = useLocation();

  const handleReset = () => {
    setLocation("/");
  };

  return (
    <div className="relative w-full max-w-[390px] md:max-w-md lg:max-w-lg h-screen bg-white mx-auto shadow-lg md:shadow-2xl md:rounded-xl md:my-4 md:h-[800px]" data-testid="mobile-container">
      <Header title="" showStatusBar={false} />
      
      <div className="flex flex-col w-full h-full pt-[104px]">
        <div className="flex flex-col w-full items-start gap-4 pt-4 pb-4 px-4 md:px-6 relative bg-neutral-50 flex-1 overflow-y-auto md:rounded-b-xl">
          
          {/* Welcome Message */}
          <div className="w-full text-center mb-2">
            <h1 className="text-2xl font-semibold text-[#181d27] font-display-lg-semibold">
              Hi, Alexandra!
            </h1>
          </div>
          
          {/* Outstanding Bill Card */}
          <Card className="w-full border-[#e9e9eb] shadow-shadows-shadow-xs" data-testid="outstanding-bill-card">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-around gap-1 px-0.5 py-0">
                        <div className="flex items-center gap-[7px] flex-1">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--display-xs-semibold-font-weight)] text-[#181d27] text-[length:var(--display-xs-semibold-font-size)] text-center leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                            Outstanding Bill
                          </div>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--text-md-medium-font-weight)] text-[#181d27] text-center font-text-md-medium text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                            Amount Due: $285.00
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--text-md-regular-font-weight)] text-[#181d27] text-center font-text-md-regular text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                            Cleaning & X-Ray - January 15, 2025
                          </div>
                        </div>
                      </div>
                    </div>

                    <Badge className="w-full justify-center px-3 py-1 bg-[#fef3f2] border-[#fecdca] text-[#b42318] rounded-full border font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                      Due by February 28, 2025
                    </Badge>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                      <Button
                        className="w-full sm:w-auto px-6 py-2.5 bg-[#1a5ed5] hover:bg-[#1651c2] text-white rounded-lg font-[number:var(--text-sm-semibold-font-weight)] text-[length:var(--text-sm-semibold-font-size)] leading-[var(--text-sm-semibold-line-height)] font-text-sm-semibold tracking-[var(--text-sm-semibold-letter-spacing)] [font-style:var(--text-sm-semibold-font-style)] transition-colors"
                        data-testid="button-pay-now"
                      >
                        Pay Now
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full sm:w-auto px-6 py-2.5 bg-white border-[#d5d6d9] text-[#414651] hover:bg-gray-50 rounded-lg font-[number:var(--text-sm-semibold-font-weight)] text-[length:var(--text-sm-semibold-font-size)] leading-[var(--text-sm-semibold-line-height)] font-text-sm-semibold tracking-[var(--text-sm-semibold-letter-spacing)] [font-style:var(--text-sm-semibold-font-style)] transition-colors"
                        data-testid="button-view-details"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Appointment Card */}
          <Card className="w-full border-[#e9e9eb] shadow-shadows-shadow-xs" data-testid="appointment-card">
            <CardContent className="p-6 space-y-6">
              <div className="space-y-5">
                <div className="space-y-4">
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-around gap-1 px-0.5 py-0">
                        <div className="flex items-center gap-[7px] flex-1">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--display-xs-semibold-font-weight)] text-[#181d27] text-[length:var(--display-xs-semibold-font-size)] text-center leading-[var(--display-xs-semibold-line-height)] font-display-xs-semibold tracking-[var(--display-xs-semibold-letter-spacing)] [font-style:var(--display-xs-semibold-font-style)]">
                            Upcoming appointment with Dr. Sarah Johnson
                          </div>
                        </div>
                      </div>

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--text-md-medium-font-weight)] text-[#181d27] text-center font-text-md-medium text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                            Wed, Feb 14, 2025 at 10:00 AM
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 mt-[-1.00px] font-[number:var(--text-md-regular-font-weight)] text-[#181d27] text-center font-text-md-regular text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                            Root Canal Treatment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Badge className="w-full justify-center px-3 py-1 bg-[#f8f8fb] border-[#d5d8eb] text-[#353e72] rounded-full border font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)]">
                    Arrive 15 minutes early with insurance card
                  </Badge>

                  <div className="flex items-center gap-3 md:gap-4 justify-center">
                    {actionButtons.map((button, index) => (
                      <div
                        key={index}
                        className="flex flex-col w-16 md:w-20 items-center gap-2 md:gap-3"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-auto p-3 md:p-4 bg-white rounded-lg border-[#d5d6d9] shadow-shadows-shadow-xs-skeuomorphic hover:shadow-md transition-shadow"
                          data-testid={`button-${button.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <button.icon className="w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                        <div className="text-center font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#414651] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                          {button.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appointment Checklist Card */}
          <Card className="w-full border-[#e9e9eb] shadow-shadows-shadow-xs">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <FileCheckIcon className="w-[42px] h-[42px]" />
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-1">
                    <div className="flex gap-[7px] items-center">
                      <div className="mt-[-1.00px] font-[number:var(--text-lg-semibold-font-weight)] text-[#181d27] text-[length:var(--text-lg-semibold-font-size)] leading-[var(--text-lg-semibold-line-height)] whitespace-nowrap font-text-lg-semibold tracking-[var(--text-lg-semibold-letter-spacing)] [font-style:var(--text-lg-semibold-font-style)]">
                        Appointment Checklist
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 mt-[-1.00px] font-[number:var(--text-md-regular-font-weight)] text-[#181d27] font-text-md-regular text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      1 of 4 forms completed
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {checklistItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 p-4 bg-white rounded-lg border border-[#e9e9eb] shadow-shadows-shadow-xs cursor-pointer hover:shadow-sm transition-shadow"
                    data-testid={`checklist-item-${item.id}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            item.completed
                              ? "bg-green-500"
                              : item.progress > 0
                              ? "bg-orange-500"
                              : "bg-gray-300"
                          }`}
                        >
                          {item.completed ? (
                            <CheckIcon className="w-4 h-4 text-white" />
                          ) : item.progress > 0 ? (
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <div className="font-[number:var(--text-md-medium-font-weight)] text-[#181d27] font-text-md-medium text-[length:var(--text-md-medium-font-size)] tracking-[var(--text-md-medium-letter-spacing)] leading-[var(--text-md-medium-line-height)] [font-style:var(--text-md-medium-font-style)]">
                            {item.title}
                          </div>
                          <div className="font-[number:var(--text-sm-regular-font-weight)] text-[#717680] font-text-sm-regular text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                            {item.timeEstimate}
                          </div>
                        </div>
                      </div>
                      <ChevronRightIcon className="w-5 h-5 text-[#717680]" />
                    </div>
                    
                    {item.progress > 0 && (
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-[#0069dc] h-2 rounded-full transition-all duration-300"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <ContactSection />

          <div className="flex justify-center px-4 pb-8">
            <Button
              onClick={handleReset}
              variant="outline"
              className="px-8 py-3 bg-white border-[#d5d6d9] text-[#717680] hover:bg-gray-50 rounded-lg font-[number:var(--text-sm-medium-font-weight)] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-text-sm-medium tracking-[var(--text-sm-medium-letter-spacing)] [font-style:var(--text-sm-medium-font-style)] transition-colors"
              data-testid="button-reset"
            >
              Reset Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
