// const express = require("express");
// const app = express();
const scrapeIt = require("scrape-it");

scrapeIt("https://salsa.faurax.fr/index.php/Paris", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/92", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/93", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/94", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/95", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/77", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/91", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/index.php/dpt/78", {
  events: {
    listItem: ".vevent",
    data: {
      title: { selector: ".summary" },
      desc: { selector: ".comm" },
      date: {
        selector: "abbr",
        attr: "title"
      },
      prix: { listItem: ".description > p:first-child" },
      adresse: { selector: ".lieu" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/75", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/91", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/92", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/93", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/94", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/95", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

scrapeIt("https://salsa.faurax.fr/cours.php/dpt/78", {
  events: {
    listItem: ".conteneur12",
    data: {
      title: { selector: "h2" },
      telephone: { selector: ".tel" },
      ville: {
        selector: ".adr"
      },
      site: { selector: ".grid3" }
    }
  }
}).then(({ data, response }) => {
  console.log(`Status Code: ${response.statusCode}`);
  console.log(data);
});

// app.listen(3000, () => {
//   // Demarage server
//   console.log("Server has started");
// });
