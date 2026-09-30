import {
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
  COURSE_01,
  COURSE_02,
  COURSE_03,
  COURSE_04,
  COURSE_05,
  COURSE_06,
} from "@/app/utils/imports";

export type Course = {
  id: number;
  title: string;
  instructor: string;
  image: typeof COURSE_01;
  category: string[];
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  price: number;
  avatars: (typeof AVATAR_1)[];
};

export const COURSE_CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Learn Figma from Basic",
    instructor: "John Doe",
    image: COURSE_01,
    category: ["Featured", "UI/UX Design", "Web Development"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },

  {
    id: 2,
    title: "Build Digital Asset",
    instructor: "Sarah Smith",
    image: COURSE_02,
    category: ["Featured", "Digital Illustration"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },

  {
    id: 3,
    title: "The Power of Big Data",
    instructor: "Alex Morgan",
    image: COURSE_03,
    category: ["Featured", "Data Science"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },

  {
    id: 4,
    title: "Balancing Productivity and Life",
    instructor: "John Doe",
    image: COURSE_04,
    category: ["Featured", "Productivity"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },

  {
    id: 5,
    title: "Mastering Money Management",
    instructor: "Sarah Smith",
    image: COURSE_05,
    category: ["Featured", "Marketing"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },

  {
    id: 6,
    title: "From Idea to Startup Success",
    instructor: "Alex Morgan",
    image: COURSE_06,
    category: ["Featured", "Freelance & Entrepreneurship"],
    lessons: 17,
    duration: "2 hours 16 min",
    comments: 59,
    rating: 4.5,
    price: 25,
    avatars: [AVATAR_1, AVATAR_2, AVATAR_3],
  },
];
