import { getCourses } from '@mocks/courses/courses'
import { CourseCard } from './course-card'

export async function Courses() {
  const courses = await getCourses()

  return (
    <div className="space-y-8">
      {courses.map((course) => (
        <div className="flex justify-center" key={course.id}>
          <CourseCard
            category={course.category}
            date={course.date}
            description={course.description}
            id={course.id}
            imageUrl={course.imageUrl}
            link={course.link}
            location={course.location}
            time={course.time}
            title={course.title}
            vacancies={course.vacancies}
          />
        </div>
      ))}
    </div>
  )
}
