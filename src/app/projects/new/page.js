'use client'
import ProjectForm from '@/components/projects/ProjectForm'

export default function NewProjectPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Ship Your Project</h1>
      <ProjectForm />
    </div>
  );
}