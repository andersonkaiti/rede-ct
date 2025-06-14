import { getCourses } from "@services/courses/courses";

import { CourseCard } from "./course-card";

export async function Courses() {
  const courses = await getCourses();

  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <div key={course.id} className="flex justify-center">
          <CourseCard
            id={course.id}
            title={course.title}
            description={course.description}
            imageUrl={course.imageUrl}
            link={course.link}
            date={course.date}
            time={course.time}
            location={course.location}
            vacancies={course.vacancies}
            category={course.category}
          />
        </div>
      ))}
    </div>
  );
}
