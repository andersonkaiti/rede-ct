import { getCourses } from "@services/courses/courses";

import { CourseCard } from "./course-card";

export async function Courses() {
  const courses = await getCourses();

  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
