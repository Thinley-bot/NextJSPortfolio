import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the project data based on the id (this can be done via a GraphQL query or any other data fetching method)
  
  return (
    <div>
      {/* Render project details here */}
      <h1>Project Details for {id}</h1>
      {/* You can display the title, description, image, and techused here */}
    </div>
  );
};

export default ProjectDetail;
