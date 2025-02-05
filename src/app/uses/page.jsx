import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-2">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech Stack',
  description: 'The tools I use and the technical skills I have mastered.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Tools I Use & Skills I Have Mastered"
      intro="A look at the programming languages, development tools, and system design approaches I work with."
    >
      <div className="space-y-5">
        <ToolsSection title="Programming Languages">
          <Tool title="JavaScript ES6+">
            I have mastered modern JavaScript, utilizing ES6+ features for cleaner, more efficient code.
          </Tool>
          <Tool title="Python 3">
            Python is my go-to language for backend development, automation scripts, and data processing.
          </Tool>
          <Tool title="SQL">
            Proficient in writing complex SQL queries to manage and interact with relational databases.
          </Tool>
          <Tool title="HTML5">
            Crafting accessible, semantic HTML for structured web pages is one of my core skills.
          </Tool>
          <Tool title="CSS">
            I use CSS to create responsive, user-friendly web interfaces with modern design principles.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Development Tools">
          <Tool title="Visual Studio Code">
            My primary code editor, VS Code offers flexibility with extensions, though I appreciate simplicity over bloat.
          </Tool>
          <Tool title="iTerm2">
            A powerful terminal emulator I use for efficient command-line workflows on macOS.
          </Tool>
          <Tool title="Insomnia">
            Essential for API testing, especially when working with backend services and databases.
          </Tool>
        </ToolsSection>

        <ToolsSection title="System Design">
          <Tool title="Monoliths">
            Comfortable designing and building traditional monolithic applications where simplicity and cohesion are key.
          </Tool>
          <Tool title="Microservices">
            Experienced in building scalable applications with microservice architectures for flexibility and reliability.
          </Tool>
          <Tool title="Domain-driven design">
            I apply domain-driven design (DDD) principles to structure applications in alignment with business needs.
          </Tool>
        </ToolsSection>

        <ToolsSection title="BackEnd">
          <Tool title="Express">
            Express remains a go-to backend framework for building fast, lightweight APIs and web applications.
          </Tool>
          <Tool title="FastAPI">
            A modern Python framework for building APIs quickly with automatic validation and performance in mind.
          </Tool>
          <Tool title="Django 4">
            My preferred web framework for robust, secure, and scalable applications, especially when time-to-market matters.
          </Tool>
          <Tool title="MongoDB">
            I use MongoDB for flexible, schema-less data storage in projects where scalability and agility are priorities.
          </Tool>
          <Tool title="PostgreSQL">
            A powerful relational database system, PostgreSQL is my choice when data integrity and complex queries are necessary.
          </Tool>
          <Tool title="CI/CD">
            Automated continuous integration and delivery pipelines help me streamline development workflows and ensure quality.
          </Tool>
        </ToolsSection>

        <ToolsSection title="FrontEnd">
          <Tool title="React">
            React is my primary front-end library, helping me build dynamic, performant user interfaces with reusable components.
          </Tool>
          <Tool title="ReactNative">
            With React Native, I develop cross-platform mobile apps that provide native-like performance and experience.
          </Tool>
          <Tool title="DOM Manipulation">
            I leverage vanilla JavaScript and DOM manipulation techniques for custom user interactions when React is not an option.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Cloud Services">
          <Tool title="AWS">
            AWS offers a wide range of services that help me deploy and scale applications in the cloud efficiently.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Version Control">
          <Tool title="Git">
            Version control with Git is essential for tracking code changes and collaborating with teams on software projects.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Containerization">
          <Tool title="Docker">
            Docker helps me streamline development environments and deployments with containerized applications.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
