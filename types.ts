
export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  price: number;
  image: string;
  tag: string;
}

export interface Instructor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
