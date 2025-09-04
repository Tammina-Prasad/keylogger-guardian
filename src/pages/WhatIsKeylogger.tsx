import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Shield, Eye, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatIsKeylogger = () => {
  const keyloggerTypes = [
    {
      icon: '💻',
      title: 'Software Keyloggers',
      description: 'Malicious programs installed on devices to record keystrokes without user knowledge.'
    },
    {
      icon: '🔌',
      title: 'Hardware Keyloggers',
      description: 'Physical devices attached between keyboard and computer to capture keystrokes.'
    },
    {
      icon: '🌐',
      title: 'Web-based Keyloggers',
      description: 'Browser-based scripts that capture form inputs and web page interactions.'
    },
    {
      icon: '📱',
      title: 'Mobile Keyloggers',
      description: 'Apps designed to monitor and record touch inputs and virtual keyboard usage.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-cyber border-b border-cyber-border">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Hub</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Info className="h-12 w-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                What is a Keylogger?
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the fundamentals of keylogger technology and its various forms
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Main Definition */}
        <section>
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Definition</h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                A keylogger is a malicious tool (software or hardware) that records user keystrokes without their knowledge. 
                Attackers use keyloggers to steal sensitive information like passwords, credit card numbers, and personal data 
                by monitoring everything a user types on their device.
              </p>
            </div>
          </Card>
        </section>

        {/* Types of Keyloggers */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Types of Keyloggers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyloggerTypes.map((type, index) => (
              <Card key={index} className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber hover:shadow-cyber-glow transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{type.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{type.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Warning Alert */}
        <section>
          <Alert className="border-red-500/50 bg-red-500/10">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-200">
              <strong>Security Warning:</strong> Keyloggers operate silently in the background, making them extremely 
              dangerous as users are typically unaware their keystrokes are being monitored and recorded.
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
};

export default WhatIsKeylogger;