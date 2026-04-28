import React, { useState, useEffect } from 'react';
import './CourseSection.css';
import course1 from '../../assets/Images/Courses/Future Quest image.png'
import course2 from '../../assets/Images/Courses/Future Quest image 2.png'

const courses = [
  {
    id: 1,
    title: "Future Quest Annual : Shaping Next-Gen Leaders And Innovators",
    image: course1,
    lessons: 80,
    students: 300,
    price: "₹1499.00",
    duration: "40 Weeks",
    tag: "Experts"
  },
  {
    id: 2,
    title: "Future Quest : Shaping Next-Gen Leaders And Innovators",
    image: course2,
    lessons: 24,
    students: 6,
    price: "₹599/-",
    duration: "12 Weeks",
    tag: "Experts",
    instructorLabel: "Instructors"
  },
  {
    id: 3,
    title: "Future Quest Annual : Shaping Next-Gen Leaders And Innovators",
    image: course1,
    lessons: 80,
    students: 300,
    price: "₹1499.00",
    duration: "40 Weeks",
    tag: "Experts"
  }
];


const stats = [
  { label: "Working Experience", value: "7+ Years", color: "#4fd1c5",icon: "M384 328L384 128C384 110.3 369.7 96 352 96L288 96C270.3 96 256 110.3 256 128L256 328C256 341.3 245.3 352 232 352C218.7 352 208 341.3 208 328L208 142.1C122 173.8 64 255.8 64 352L64 416L576 416L576 352C575 256.8 517.6 174.3 432 142.2L432 328C432 341.3 421.3 352 408 352C394.7 352 384 341.3 384 328zM72 464C49.9 464 32 481.9 32 504C32 526.1 49.9 544 72 544L568 544C590.1 544 608 526.1 608 504C608 481.9 590.1 464 568 464L72 464z" },
  { label: "Satisfied Organisations", value: "5+", color: "#ff8c42",icon:"M144 224C161.7 224 176 238.3 176 256L176 512C176 529.7 161.7 544 144 544L96 544C78.3 544 64 529.7 64 512L64 256C64 238.3 78.3 224 96 224L144 224zM334.6 80C361.9 80 384 102.1 384 129.4L384 133.6C384 140.4 382.7 147.2 380.2 153.5L352 224L512 224C538.5 224 560 245.5 560 272C560 291.7 548.1 308.6 531.1 316C548.1 323.4 560 340.3 560 360C560 383.4 543.2 402.9 521 407.1C525.4 414.4 528 422.9 528 432C528 454.2 513 472.8 492.6 478.3C494.8 483.8 496 489.8 496 496C496 522.5 474.5 544 448 544L360.1 544C323.8 544 288.5 531.6 260.2 508.9L248 499.2C232.8 487.1 224 468.7 224 449.2L224 262.6C224 247.7 227.5 233 234.1 219.7L290.3 107.3C298.7 90.6 315.8 80 334.6 80z" },
  { label: "Target Students", value: "1M +", color: "#ff8c42", icon:"M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z" },
  { label: "Experts Instructors", value: "8+", color: "#4fd1c5", icon: "M192 448C245 448 288 491 288 544C288 561.7 273.7 576 256 576L32 576C14.3 576 0 561.7 0 544C0 491 43 448 96 448L192 448zM544 96C579.3 96 608 124.7 608 160L608 448C608 481.1 582.8 508.4 550.5 511.7L544 512L332.9 512C327.8 487.8 316.6 465.9 300.8 448L352 448L352 416C352 398.3 366.3 384 384 384L480 384C497.7 384 512 398.3 512 416L512 448L544 448L544 160L192 160L192 217.3C177.2 211.3 161 208 144 208C138.6 208 133.2 208.3 128 209L128 160C128 124.7 156.7 96 192 96L544 96zM144 416C99.8 416 64 380.2 64 336C64 291.8 99.8 256 144 256C188.2 256 224 291.8 224 336C224 380.2 188.2 416 144 416z" }
];

const parseValue = (value) => {
  const numMatch = value.match(/^(\d+)/);
  if (!numMatch) return { number: 0, suffix: value };
  let number = parseInt(numMatch[1]);
  let suffix = value.slice(numMatch[0].length);
  if (suffix.trim().startsWith('M')) {
    number *= 1000000;
    suffix = suffix.replace('M', '').trim();
  } else if (suffix.trim().startsWith('K')) {
    number *= 1000;
    suffix = suffix.replace('K', '').trim();
  }
  return { number, suffix };
};

const formatNumber = (num, suffix) => {
  if (num >= 1000000) {
    return `${Math.floor(num / 1000000)}M${suffix}`;
  } else if (num >= 1000) {
    return `${Math.floor(num / 1000)}K${suffix}`;
  } else {
    return `${num}${suffix}`;
  }
};

const CourseSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const { number } = parseValue(stat.value);
      const duration = 2000; 
      const steps = 60; 
      const increment = number / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= number) {
          current = number;
          clearInterval(interval);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = current;
          return newCounters;
        });
      }, duration / steps);
      return interval;
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="course-section" id='plans'>
      <div className="course-header">
        <p className="orange-tag">OUR COURSES</p>
        <h2>Our Most Popular <span className="cyan-text">Courses</span></h2>
      </div>

      <div className="course-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="card-image">
              <img src={course.image} alt="Course Thumbnail" />
            </div>
            <div className="card-content">
              <div className="card-badges">
                <span className="badge-experts">{course.tag}</span>
                <span className="badge-weeks">🕒 {course.duration}</span>
              </div>
              <h3 className="card-title">{course.title}</h3>
              <div className="card-meta">
                <span>📖 {course.lessons} Lessons</span>
                <span>👥 {course.students} {course.instructorLabel || 'Students'}</span>
              </div>
              <div className="card-footer">
                <button className="price-btn">{course.price}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-icon"  style={{ backgroundColor: stat.color }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d={stat.icon}/></svg></div>
              <h3>{formatNumber(Math.floor(counters[index]), parseValue(stat.value).suffix)}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;