import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Zap, ArrowLeft, Mail, Download, Wifi, Link2, Usb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItSpreads = () => {
  const spreadMethods = [
    {
      icon: Mail,
      title: 'Phishing Emails',
      description: 'Fake emails tricking users into clicking malicious links or downloading infected attachments.',
      risk: 'High'
    },
    {
      icon: Download,
      title: 'Drive-by Downloads',
      description: 'Malicious sites automatically download malware when you visit or interact with them.',
      risk: 'High'
    },
    {
      icon: Usb,
      title: 'Infected USB Drives',
      description: 'Removable media containing keylogger software that auto-executes when connected.',
      risk: 'Medium'
    },
    {
      icon: Link2,
      title: 'Malicious Links',
      description: 'Dangerous links on compromised websites, social media, or chat applications.',
      risk: 'Medium'
    },
    {
      icon: Wifi,
      title: 'Network Vulnerabilities',
      description: 'Attackers exploit network security flaws to remotely install keylogger software.',
      risk: 'High'
    },
    {
      icon: Users,
      title: 'Social Engineering',
      description: 'Psychological manipulation tactics to trick users into installing malicious software.',
      risk: 'High'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'bg-red-500/20 text-red-300 border-red-500/50';
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
              <Zap className="h-12 w-12 text-primary animate-pulse-glow" />
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-cyan-300 bg-clip-text text-transparent">
                How Keyloggers Spread
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common attack vectors and distribution methods used by cybercriminals
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Attack Methods Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Common Distribution Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spreadMethods.map((method, index) => (
              <Card key={index} className="p-6 bg-cyber-bg-section border-cyber-border shadow-cyber hover:shadow-cyber-glow transition-all duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                    <Badge className={`${getRiskColor(method.risk)} border`}>
                      {method.risk} Risk
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{method.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Protection Tips */}
        <section>
          <Card className="p-8 bg-cyber-bg-section border-cyber-border shadow-cyber">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Stay Protected</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Email Safety</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Verify sender authenticity before clicking links</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Scan attachments with antivirus software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Be suspicious of urgent or threatening messages</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Download Security</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Only download from trusted, official sources</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Keep browser and plugins updated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Avoid suspicious websites and pop-ups</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default HowItSpreads;