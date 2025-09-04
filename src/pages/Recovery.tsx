import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RotateCcw, ArrowLeft, WifiOff, Search, Key, CreditCard, Database, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recovery = () => {
  const recoverySteps = [
    {
      icon: WifiOff,
      title: 'Disconnect & Isolate',
      description: 'Immediately disconnect from the internet to stop data transmission and prevent further damage.',
      urgency: 'Immediate'
    },
    {
      icon: Search,
      title: 'Identify the Strain',
      description: 'Run comprehensive antivirus and anti-malware scans to detect and identify the keylogger type.',
      urgency: 'Critical'
    },
    {
      icon: Key,
      title: 'Change All Passwords',
      description: 'Update all account passwords from a clean, trusted device that was not compromised.',
      urgency: 'Critical'
    },
    {
      icon: CreditCard,
      title: 'Monitor Financial Accounts',
      description: 'Check bank and credit card statements for unauthorized transactions and report suspicious activity.',
      urgency: 'High'
    },
    {
      icon: Database,
      title: 'Restore from Backup',
      description: 'Use clean backups to restore your system, ensuring they were created before the infection.',
      urgency: 'Medium'
    },
    {
      icon: Phone,
      title: 'Contact Security Experts',
      description: 'Consider professional cybersecurity assistance for complete system cleanup and assessment.',
      urgency: 'Medium'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Immediate': return 'bg-red-600/20 text-red-300 border-red-600/50';
      case 'Critical': return 'bg-red-500/20 text-red-300 border-red-500/50';
      case 'High': return 'bg-orange-500/20 text-orange-300 border-orange-500/50';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

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
              <RotateCcw className="h-12 w-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                Recovery Steps
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential actions to take if you suspect a keylogger infection
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Recovery Steps Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Immediate Response Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recoverySteps.map((step, index) => (
              <Card key={index} className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber hover:shadow-cyber-glow transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                    <Badge className={`${getUrgencyColor(step.urgency)} border`}>
                      {step.urgency}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Recovery Process */}
        <section>
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Detailed Recovery Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Technical Steps</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Boot from external antivirus rescue disk</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Run multiple malware detection tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Check system processes and startup programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Verify system file integrity</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Account Security</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Enable fraud alerts on financial accounts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Review and revoke app permissions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Check for unauthorized account access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Update security questions and backup emails</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Critical Warning */}
        <section>
          <Alert className="border-red-500/50 bg-red-500/10">
            <RotateCcw className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-red-200">
              <strong>Time is Critical:</strong> The faster you respond to a suspected keylogger infection, 
              the less damage can occur. Don't delay - start with disconnecting from the internet immediately.
            </AlertDescription>
          </Alert>
        </section>
      </div>
    </div>
  );
};

export default Recovery;