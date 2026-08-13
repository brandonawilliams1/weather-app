export const IMAGES = {
  hero: 'https://images.pexels.com/photos/1058276/pexels-photo-1058276.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cta: 'https://images.pexels.com/photos/30169356/pexels-photo-30169356.jpeg?auto=compress&cs=tinysrgb&w=1600',
  collage: {
    gps: 'https://images.pexels.com/photos/9966011/pexels-photo-9966011.jpeg?auto=compress&cs=tinysrgb&w=800',
    analytics: 'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&w=800',
    creative: 'https://images.pexels.com/photos/13451104/pexels-photo-13451104.jpeg?auto=compress&cs=tinysrgb&w=800',
    truck1: '/home/project/assets/images/led_truck.jpg',
    truck2: 'https://images.pexels.com/photos/13673160/pexels-photo-13673160.jpeg?auto=compress&cs=tinysrgb&w=800',
    truck3: 'https://images.pexels.com/photos/756091/pexels-photo-756091.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
};

export const SERVICES = [
  {
    icon: 'truck',
    title: 'Mobile LED Advertising',
    description: 'High-impact digital billboards on wheels. We drive your brand through high-traffic corridors, events, and target zones where your audience lives, works, and plays — maximizing impressions with zero wasted reach.',
  },
  {
    icon: 'target',
    title: 'Targeted Neighborhood Business Showcase Loop',
    description: 'Hyper-local campaigns that loop through specific neighborhoods and business districts. Perfect for grand openings, real estate launches, and local brand awareness where precision matters more than scale.',
  },
  {
    icon: 'event',
    title: 'Community Event Production',
    description: 'Turn your event into a spectacle. Our LED trucks serve as mobile stages, live-screen displays, and dynamic backdrops for festivals, parades, tailgates, and community gatherings of any size.',
  },
];

export const BENEFITS = [
  {
    stat: '96%',
    title: 'Recall Rate',
    description: 'Mobile LED displays achieve up to 96% ad recall — dramatically higher than static billboards (71%) and digital display ads (50%). The novelty and motion of a moving screen sears your message into memory.',
    source: 'OOH Marketing Association, 2024',
  },
  {
    stat: '2.4x',
    title: 'Higher Engagement',
    description: 'Vehicle-based LED advertising generates 2.4× more engagement than traditional static billboards. Moving screens capture attention in environments where consumers are already looking at their surroundings.',
    source: 'NJCOP / OAAA Cross-Channel Study',
  },
  {
    stat: '$3.50',
    title: 'Cost Per Thousand (CPM)',
    description: 'Mobile LED trucks deliver impressions at roughly $3.50 CPM — a fraction of TV ($20+), digital online ($8–15), and even many static OOH placements — making it one of the most cost-efficient mediums available.',
    source: 'Lamar Advertising CPM Benchmark Report',
  },
  {
    stat: '70K+',
    title: 'Daily Impressions Per Truck',
    description: 'A single LED truck operating in a metro market generates an estimated 50,000–90,000 impressions per day depending on route density, event traffic, and dwell time — verifiable through GPS and impression analytics.',
    source: 'Geopath OOH Impression Data',
  },
  {
    stat: '+47%',
    title: 'Foot Traffic Lift',
    description: 'Brands running mobile LED campaigns near retail locations report an average 47% lift in store visits during campaign windows, driven by proximity-based exposure and time-sensitive call-to-action creative.',
    source: 'Vistar Media / Placed Attribution Study',
  },
];

export const COLLAGE_ITEMS = [
  { type: 'advantage', image: null, icon: 'gps', label: 'GPS Tracking', caption: 'Real-time route summaries with live GPS tracking on every truck, every campaign.' },
  { type: 'truck', image: 'truck1', caption: 'On route through downtown corridors during peak traffic hours.' },
  { type: 'advantage', image: null, icon: 'analytics', label: 'AI Impression Reports', caption: 'Our AI-embedded analytics system auto-generates impression reports by route, time, and audience.' },
  { type: 'truck', image: 'truck2', caption: 'Turning heads at a packed community festival on a Saturday night.' },
  { type: 'advantage', image: null, icon: 'creative', label: 'Creative Marketing Team', caption: 'Our in-house creative department designs your ads from concept to final render — included.' },
  { type: 'truck', image: 'truck3', caption: 'Live screen display energizing an outdoor concert crowd after dark.' },
];

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Why LoVo', href: '#why-lovo' },
  { label: 'Get a Quote', href: '#contact' },
  { label: 'Connect', href: '#social' },
];

export const SOCIAL_LINKS = [
  { platform: 'X', href: '#', color: '#000000' },
  { platform: 'TikTok', href: '#', color: '#000000' },
  { platform: 'YouTube', href: '#', color: '#FF0000' },
  { platform: 'Facebook', href: '#', color: '#1877F2' },
  { platform: 'Snapchat', href: '#', color: '#FFFC00' },
  { platform: 'Instagram', href: '#', color: '#E4405F' },
  { platform: 'Pinterest', href: '#', color: '#BD081C' },
];

export const QUOTE_BODY = `We are reaching out to inquire about your LED mobile advertising truck services. Our company is planning an advertising campaign and would like to request a detailed quotation based on the following requirements:

Campaign Duration: [e.g., 4 weeks / specify dates]
Coverage Area / Routes: [e.g., downtown business districts, specific neighborhoods, or list of cities]
Operating Hours: [e.g., 9 AM – 9 PM daily]
Screen Specifications: [e.g., size, resolution, single or double-sided display]
Content Format: [e.g., video/animation file format and dimensions to be provided separately]
Additional Services: [e.g., GPS tracking reports, photo/video proof of operation, audience impression reports]

We would appreciate it if you could include the following in your quotation:
- Daily/weekly/monthly rental rates
- Setup or production fees (if any)
- Sample routes or coverage maps for our target area
- Estimated lead time for booking and deployment
- Payment terms and cancellation policy

Please also let us know if you require any additional information from our side to prepare an accurate quote.

We look forward to your prompt response and would appreciate receiving your quotation by [deadline date].

Thank you for your time and consideration.

Best regards,`;

export const QUOTE_SUBJECT = 'Request for Quotation – LED Advertising Truck Campaign';
