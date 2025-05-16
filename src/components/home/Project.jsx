import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import PersonalProjectCard from "./PersonalProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic, personalProjects, schoolProjects }) => {
  const allReposAPI = username ? `${API}/users/${username}/repos?sort=updated&direction=desc` : "";
  const specficReposAPI = username ? `${API}/repos/${username}` : "";
  const dummyProjectsArr = length && username ? new Array(length + (specfic?.length || 0)).fill(dummyProject) : [];

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    if (!username) return;
    
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI, username]);

  useEffect(() => {
    if (username) {
      fetchRepos();
    }
  }, [fetchRepos, username]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">Projects</h2>
        
        {/* GitHub Projects */}
        {username && (
          <>
            <h3 className="display-6 pb-3 text-center">{heading}</h3>
            <Row>
              {projectsArray.length
                ? projectsArray.map((project, index) => (
                  <ProjectCard
                    key={`project-card-${index}`}
                    id={`project-card-${index}`}
                    value={project}
                  />
                ))
                : dummyProjectsArr.map((project, index) => (
                  <ProjectCard
                    key={`dummy-${index}`}
                    id={`dummy-${index}`}
                    value={project}
                  />
                ))}
            </Row>
          </>
        )}
        
        {/* Personal Projects */}
        {personalProjects && personalProjects.show && (
          <>
            <h3 className="display-6 pb-3 text-center">{personalProjects.heading}</h3>
            <Row className="justify-content-center">
              {personalProjects.data.length > 0 ? (
                personalProjects.data.map((project, index) => (
                  <PersonalProjectCard key={index} data={project} />
                ))
              ) : (
                <div className="text-center w-100 pb-4">No personal projects yet.</div>
              )}
            </Row>
          </>
        )}
        
        {/* School Projects */}
        {schoolProjects && schoolProjects.show && (
          <>
            <h3 className="display-6 pb-3 text-center">{schoolProjects.heading}</h3>
            <Row className="justify-content-center">
              {schoolProjects.data.length > 0 ? (
                schoolProjects.data.map((project, index) => (
                  <PersonalProjectCard key={index} data={project} />
                ))
              ) : (
                <div className="text-center w-100 pb-4">No school projects yet.</div>
              )}
            </Row>
          </>
        )}
      </Container>
    </Jumbotron>
  );
};

export default Project;
