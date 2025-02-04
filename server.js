const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// הגדרת מסלול בסיסי
app.get('/', (req, res) => {
  res.send([
    {
      "cursor": "KroiGrVxZZ90MGRzdnFyYzczZnRyaGcw",
      "service": {
        "autoDeploy": "yes",
        "branch": "main",
        "createdAt": "2025-02-02T21:07:14.197613Z",
        "dashboardUrl": "https://dashboard.render.com/web/srv-cuftt0dsvqrc73ftrhg0",
        "id": "srv-cuftt0dsvqrc73ftrhg0",
        "name": "ToDoListSrever",
        "notifyOnFail": "default",
        "ownerId": "tea-cuf8h2dumphs73b0d11g",
        "repo": "https://github.com/Rachely-Yelloz/ToDoList",
        "rootDir": "",
        "serviceDetails": {
          "buildPlan": "starter",
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "./Dockerfile"
          },
          "healthCheckPath": "",
          "maintenanceMode": {
            "enabled": false,
            "uri": ""
          },
          "numInstances": 1,
          "openPorts": null,
          "plan": "free",
          "previews": {
            "generation": "off"
          },
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "runtime": "docker",
          "sshAddress": "srv-cuftt0dsvqrc73ftrhg0@ssh.singapore.render.com",
          "url": "https://todolistsrever.onrender.com"
        },
        "slug": "todolistsrever",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2025-02-04T17:33:17.236938Z"
      }
    },
    {
      "cursor": "KroiGrVxZZ81NmlqMWs2YzczZnVnYzcw",
      "service": {
        "autoDeploy": "yes",
        "branch": "main",
        "createdAt": "2025-02-02T20:16:26.950737Z",
        "dashboardUrl": "https://dashboard.render.com/static/srv-cuft56ij1k6c73fugc70",
        "id": "srv-cuft56ij1k6c73fugc70",
        "name": "ToDoListClient",
        "notifyOnFail": "default",
        "ownerId": "tea-cuf8h2dumphs73b0d11g",
        "repo": "https://github.com/Rachely-Yelloz/ToDoListClient",
        "rootDir": "",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "buildPlan": "starter",
          "previews": {
            "generation": "off"
          },
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todolistclient-n4gl.onrender.com"
        },
        "slug": "todolistclient-n4gl",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2025-02-04T17:50:02.851366Z"
      }
    }
  ]);
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 
