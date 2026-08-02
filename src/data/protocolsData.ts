import { EmergencyProtocol } from '../types/emergency';

export const EMERGENCY_PROTOCOLS: Record<string, EmergencyProtocol> = {
  medical: {
    id: 'medical',
    title: 'Medical Emergency & Trauma Response',
    categoryName: 'Medical Emergency',
    caption: 'Cardiac Arrest, Major Trauma, Bleeding, or Severe Respiratory Distress',
    estimatedEmsTime: '4 - 8 Minutes',
    localAuthority: 'LASEMA / LASAMBUS / Local General Hospital',
    primaryHotline: '112',
    recommendedServiceIds: ['lag-lasambus', 'lag-lasuth', 'fed-112', 'lag-red-cross'],
    criticalNotice: 'These safety steps are for immediate first-aid guidance while waiting for qualified ambulance and medical dispatch. Call emergency responders immediately.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'ShieldCheck',
        title: 'Verify Scene Safety First',
        description: 'Ensure the surrounding environment is safe from electrical hazards, toxic gas, structural collapse, or oncoming traffic before approaching the patient.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'PhoneCall',
        title: 'Alert Emergency Ambulance (Call 112 or 767)',
        description: 'Call national emergency (112) or Lagos LASAMBUS / local hospital line immediately. State your exact landmark, patient condition, and stay on the line.',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'Activity',
        title: 'Check Responsiveness & Airway',
        description: 'Gently tap the patient’s shoulders and ask loudly "Are you okay?". If unassisted and unresponsive, check if the chest is rising normally for 10 seconds.',
        isCritical: false
      },
      {
        stepNumber: 4,
        iconName: 'HeartPulse',
        title: 'Perform CPR if Trained & Unresponsive',
        description: 'If the patient is not breathing normally, place hands at the center of the chest and give firm, hard, fast chest compressions (100–120 per minute) until paramedics arrive.',
        isCritical: true
      },
      {
        stepNumber: 5,
        iconName: 'Bandage',
        title: 'Control Severe Bleeding',
        description: 'Apply firm, continuous direct pressure to any actively bleeding wound using a clean cloth, bandage, or clothing. Elevate the bleeding limb if no fracture is suspected.',
        isCritical: false
      }
    ]
  },
  fire: {
    id: 'fire',
    title: 'Fire & Gas Outbreak Safety Protocol',
    categoryName: 'Fire & Gas Hazard',
    caption: 'Structural Fire, Electrical Fire, Gas Leakage, or Chemical Explosion',
    estimatedEmsTime: '6 - 10 Minutes',
    localAuthority: 'Federal & State Fire Service Command',
    primaryHotline: '112',
    recommendedServiceIds: ['lag-fire-hq', 'fed-fire-hq', 'fed-112', 'lag-lasema-112'],
    criticalNotice: 'Do NOT attempt to fight a large or spreading fire yourself. Evacuate immediately and alert all occupants.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'LogOut',
        title: 'Evacuate Building Immediately',
        description: 'Sound the local alarm, shout "FIRE", and exit through the nearest clear fire escape route. Do not pause to gather personal belongings.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'Building',
        title: 'Never Use Elevators',
        description: 'Always use fire exit stairwells. Elevators can lose power or trap passengers in smoke-filled shafts during structural fires.',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'Flame',
        title: 'Stay Low to Avoid Toxic Smoke',
        description: 'Smoke and lethal carbon monoxide rise upwards. Crawl on hands and knees to stay below the smoke line where air is cleaner and cooler.',
        isCritical: false
      },
      {
        stepNumber: 4,
        iconName: 'DoorClosed',
        title: 'Test Doors for Heat Before Opening',
        description: 'Touch the door and door handle with the back of your hand. If hot to touch, DO NOT open — look for an alternative window or secondary exit route.',
        isCritical: false
      },
      {
        stepNumber: 5,
        iconName: 'PhoneCall',
        title: 'Dispatch Fire Control (Call 112 / Fire HQ)',
        description: 'Once outside at a safe assembly point, call the Fire Service (112 or local Fire HQ). Report fuel sources, trapped persons, and building layout.',
        isCritical: true
      }
    ]
  },
  accident: {
    id: 'accident',
    title: 'Road Traffic Crash & Highway Rescue Protocol',
    categoryName: 'Accident & Collision',
    caption: 'Highway Crash, Vehicle Rollover, Pedestrian Hit, or Tanker Spill',
    estimatedEmsTime: '5 - 9 Minutes',
    localAuthority: 'Federal Road Safety Corps (FRSC) & Police Rescue',
    primaryHotline: '122',
    recommendedServiceIds: ['fed-frsc', 'lag-lasema-112', 'ogu-trace-rescue', 'fed-112'],
    criticalNotice: 'Beware of fuel spills, secondary traffic collisions, or ignition hazards. Keep crowds at a safe distance.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'AlertTriangle',
        title: 'Secure the Crash Site Perimeter',
        description: 'Park your vehicle safely away with hazard lights ON. Place warning triangles or reflective cones 50 meters back to warn oncoming highway traffic.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'KeyRound',
        title: 'Switch Off Engine Ignitions',
        description: 'Turn off the ignition key in all involved crashed vehicles to prevent fuel sparks, electrical fires, or battery explosions.',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'PhoneCall',
        title: 'Contact FRSC Highway Rescue (Call 122 or 112)',
        description: 'Call FRSC toll-free line 122 or 112. Specify highway route number (e.g. Lagos-Ibadan, Abuja-Kano, Lekki-Epe), kilometer marker, and number of casualties.',
        isCritical: true
      },
      {
        stepNumber: 4,
        iconName: 'UserCheck',
        title: 'Do Not Move Severely Injured Persons',
        description: 'Unless there is immediate threat of fire, explosion, or submerged vehicle, DO NOT move unconscious or spine-injured victims to prevent paralysis.',
        isCritical: true
      },
      {
        stepNumber: 5,
        iconName: 'ShieldAlert',
        title: 'Beware of Petroleum / Tanker Leaks',
        description: 'If a fuel tanker or hazardous container is leaking, move everyone at least 300 meters UPWIND immediately. No open flames, phone flashes, or smoking.',
        isCritical: true
      }
    ]
  },
  security: {
    id: 'security',
    title: 'Armed Threat, Intrusion & Security Response',
    categoryName: 'Crime & Security Threat',
    caption: 'Robbery, Kidnapping Threat, Civil Unrest, Armed Intrusion, or Assault',
    estimatedEmsTime: '3 - 7 Minutes',
    localAuthority: 'Nigeria Police Command & Joint Security Forces',
    primaryHotline: '112',
    recommendedServiceIds: ['fed-police-hq', 'lag-police-cmd', 'fct-police-cmd', 'oyo-operation-burst'],
    criticalNotice: 'Prioritize personal physical safety. Avoid confrontation with armed perpetrators. Seek secure concealment.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'Lock',
        title: 'Run, Hide, and Barricade',
        description: 'If an active armed threat is in your vicinity, evacuate silently if a safe route exists. Otherwise, retreat into a solid room, lock doors, and heavy-barricade entrances.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'VolumeX',
        title: 'Silence All Mobile Devices',
        description: 'Turn off phone ringers, vibration alerts, and screen backlights. Keep completely silent and hide behind solid concrete walls or heavy furniture.',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'PhoneCall',
        title: 'Silent Emergency Signal to Police Control',
        description: 'Text or call 112 / Police Control Room quietly. Clearly state your location, number of suspects, weapons seen, and number of trapped occupants.',
        isCritical: true
      },
      {
        stepNumber: 4,
        iconName: 'EyeOff',
        title: 'Maintain Low Profile & Concealment',
        description: 'Stay off windows and away from exterior glass doors. Do not peek out or attract attention until security forces explicitly confirm scene safety.',
        isCritical: false
      },
      {
        stepNumber: 5,
        iconName: 'UserCheck',
        title: 'Follow Security Forces Instructions Upon Arrival',
        description: 'When police or military intervention team arrives, keep hands raised, open, and clearly visible at all times. Avoid sudden movements or shouting.',
        isCritical: true
      }
    ]
  },
  flood: {
    id: 'flood',
    title: 'Flood, Storm & Natural Disaster Response',
    categoryName: 'Flood & Natural Disaster',
    caption: 'Flash Flood, Heavy Downpour Inundation, Windstorm, or Building Collapse',
    estimatedEmsTime: '8 - 12 Minutes',
    localAuthority: 'NEMA / LASEMA / SEMA Disaster Command',
    primaryHotline: '112',
    recommendedServiceIds: ['fed-nema', 'lag-lasema-112', 'fct-fema', 'fed-112'],
    criticalNotice: 'Never attempt to walk, swim, or drive through fast-flowing floodwaters. Six inches of moving water can knock an adult off their feet.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'TrendingUp',
        title: 'Move to Higher Elevation Immediately',
        description: 'If water levels rise rapidly inside or around your structure, move immediately to upper floors or sturdy rooftop access. Do not hide in enclosed attics.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'PowerOff',
        title: 'Switch Off Main Electricity & Gas Valves',
        description: 'If safe to reach main electrical breakers, switch off power to prevent fatal electrocution through flooded water circuits.',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'Car',
        title: 'Abandon Stalled Vehicles in Floodwaters',
        description: 'If driving and trapped in rising floodwaters, abandon the vehicle immediately and climb to elevated ground. Cars can be swept away swiftly.',
        isCritical: true
      },
      {
        stepNumber: 4,
        iconName: 'PhoneCall',
        title: 'Alert NEMA / SEMA Disaster Control (Call 112)',
        description: 'Contact NEMA or state emergency agency. Report stranded people, elderly individuals, children, or collapsed structure locations.',
        isCritical: true
      },
      {
        stepNumber: 5,
        iconName: 'Radio',
        title: 'Avoid Contaminated Water & Powerlines',
        description: 'Submerged floodwaters contain sewage, dangerous debris, and fallen high-tension electrical cables. Stay clear until disaster teams authorize.',
        isCritical: false
      }
    ]
  },
  other: {
    id: 'other',
    title: 'General Distress & Multi-Agency Dispatch',
    categoryName: 'General Emergency',
    caption: 'Unclassified Distress, Community Hazard, or Multi-Service Crisis',
    estimatedEmsTime: '4 - 8 Minutes',
    localAuthority: 'National Emergency Communications Center',
    primaryHotline: '112',
    recommendedServiceIds: ['fed-112', 'lag-lasema-112', 'fed-police-hq', 'fed-frsc'],
    criticalNotice: 'For any urgent situation where life or property is at immediate risk, call the 112 universal toll-free emergency line.',
    steps: [
      {
        stepNumber: 1,
        iconName: 'Radio',
        title: 'Dial National Emergency Line 112',
        description: 'Dial 112 toll-free from any network in Nigeria (even without airtime or active SIM subscription). State the precise nature of the emergency clearly.',
        isCritical: true
      },
      {
        stepNumber: 2,
        iconName: 'MapPin',
        title: 'State Your Precise Landmark & Location',
        description: 'Provide state, local government area (LGA), street name, nearby prominent landmark (e.g. major bus stop, hospital, school, worship center).',
        isCritical: true
      },
      {
        stepNumber: 3,
        iconName: 'PhoneCall',
        title: 'Maintain Phone Connectivity',
        description: 'Keep your mobile phone line free so command dispatchers or responding units can call you back for direct navigation updates.',
        isCritical: false
      },
      {
        stepNumber: 4,
        iconName: 'Users',
        title: 'Designate a Landmark Spotter',
        description: 'If possible, send a bystander or colleague to wait at the main junction or road entrance to guide arriving sirens and emergency vehicles.',
        isCritical: false
      }
    ]
  }
};
