// There is no reason for the name here except as an
// example of how to set something for the POST
let name = 'unknown';

const hostIndex = (req, res) => {
  res.render('index', {
    title: 'Home',
    pageName: 'Home Page',
    userName: name
  });
};

const hostPage1 = (req, res) => {
  const myArray = ['test', 'test2'];
  
  //const filtered = myArray.filter((x) => { return x.length <= 4; });
  const filtered = myArray.filter(x => x.length <= 4);

  res.render('page1', {
    title: 'Page 1',
    names: filtered,
  });
};

const hostPage2 = (req, res) => {
  res.render('page2', {
    title: 'Page 1'
  });
};

const getName = (req, res) => {
  res.json({name});
};

const setName = (req, res) => {
  //Missing necessary params (Bad Request)
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'firstname and lastname are required',
      id: 'setNameMissingParams',
    });
  }

  //Necessary params provided (Success)
  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name});
};

const notFound = (req, res) => {
  res.status(404).render('notFound', {
    page: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
