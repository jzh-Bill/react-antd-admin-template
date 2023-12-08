import Mock from "mockjs";

let List = [];
let familyList = [];
let attendeeList = [];
let diningTableList = [];


const count = 100;

for (let i = 0; i < count; i++) {
  diningTableList.push(
    Mock.mock({
      tableNumber: "@integer(5000, 100000)",
      availableSeats: "@integer(10, 20)",
      maxSeats: "@integer(30, 50)"
    })
  );
}

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: i,
      title: "@ctitle(5, 10)",
      author: "@cname",
      readings: "@integer(300, 5000)",
      "star|1-3": "★",
      "status|1": ["published", "draft"],
      date: "@datetime",
    })
  );
}

for (let i = 0; i < count; i++) {
  familyList.push(
    Mock.mock({
      // Those identifiers have to be the exactly same as the key name in the <Column>s
      name: "@cname",
      age: "@integer(1, 100)",
      gender: "F",
      christian: "Yes",
      fellowship:"@ctitle(5, 10)",
    })
  );
}

for (let i = 0; i < count; i++) {
  attendeeList.push(
    Mock.mock({
      // Those identifiers have to be the exactly same as the key name in the <Column>s
      confirmID: "@integer(5000, 100000)",
      lastName: "@clast",
      firstName: "@cfirst()",
      chineseName: "@cname",
      personalID:"@integer(5000, 100000)",
      "paymentType|1": ["single", "family", "self-pay"],

      "state|1": ["GA", "HI", "IA","MA","NE","NY", "PA", "SD"],

      "fellowship|1":["AMES, IA",
      "AUBURN, AL",
      "AUSTIN, TX",
      "BLOOMINGTON, IN",
      "CA Mission Team, CA",
      "CARBONDALE, IL",
      "CEDAR FALLS, IA",
      "CEF",
      "CHAMPAIGN, IL",
      "CHICAGO, IL",
      "COLUMBIA, MO",
      "COLUMBUS, IN",
      "CONWAY, AR",
      "CWC",
      "DALLAS, TX",
      "DENTON, TX",
      "EDMOND, OK",
      "EL PASO (Chinese Baptist), TX",
      "EL PASO, TX",
      "Emmanuel Chinese KANSAS CITY, KS",
      "FAYETTEVILLE, AR",
      "FORT WORTH, TX",
      "FREMONT, CA",
      "FULTON, MO",
      "Greater KANSAS CITY Chinese, KS",
      "GREENWOOD, IN",
      "INDIANAPOLIS, IN",
      "IOWA CITY, IA - Chinese Church of Iowa City",
      "IOWA CITY, IA - Chinese Evangelical Church in Iowa City",
      "IRVING, TX",
      "KIRKSVILLE, MO",]

    })
  );
}


export default {
  tableList: (config) => {
    const { pageNumber, pageSize, title, status, star } = JSON.parse(
      config.body
    );
    let start = (pageNumber - 1) * pageSize;
    let end = pageNumber * pageSize;
    let mockList = List.filter((item) => {
      if (star && item.star.length !== star) return false;
      if (status && item.status !== status) return false;
      if (title && item.title.indexOf(title) < 0) return false;
      return true;
    });
    let pageList = mockList.slice(start, end);
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList,
      },
    };
  },
  deleteItem: (config) => {
    const { id } = JSON.parse(config.body);
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1);
    return {
      code: 20000,
    };
  },
  editItem: (config) => {
    const data = JSON.parse(config.body);
    const { id } = data;
    const item = List.filter((item) => item.id === id);
    const index = List.indexOf(item[0]);
    List.splice(index, 1, data);
    return {
      code: 20000,
    };
  },

  // familyTable data mock up
  familyTableList: (config) => {
    const { pageNumber, pageSize } = JSON.parse(
      config.body
    );
    let start = (pageNumber - 1) * pageSize;
    let end = pageNumber * pageSize;
    let pageList = familyList.slice(start, end);
    console.log(pageList);
    return {
      code: 20000,
      data: {
        total: familyList.length,
        items: pageList,
      },
    };
  },

    // familyTable data mock up
  attendeeTableList: (config) => {
    const { pageNumber, pageSize, confirmID, lastName, firstName, personalID, chineseName, paymentType, state, fellowship} = JSON.parse(
      config.body
    );
    let start = (pageNumber - 1) * pageSize;
    let end = pageNumber * pageSize;

    let mockList = attendeeList.filter((item) => {
      if (confirmID && item.confirmID != confirmID ) return false;
      if (lastName && item.lastName != lastName ) return false;
      if (firstName && item.firstName != firstName ) return false;
      if (personalID && item.personalID != personalID ) return false;
      if (chineseName && item.chineseName != chineseName ) return false;

      if (paymentType && paymentType != "all" && item.paymentType != paymentType ) return false;
      if (state && state != "all" && item.state != state ) return false;
      if (fellowship && fellowship != "all" && item.fellowship != fellowship  ) return false;

      return true;
    });

    let pageList = mockList.slice(start, end);
    console.log(pageList);
    return {
      code: 20000,
      data: {
        total: mockList.length,
        items: pageList,
      },
    };
  },

  // dining tables data mock up
  diningTableList: (config) => {
    const { pageNumber, pageSize } = JSON.parse(
      config.body
    );
    let start = (pageNumber - 1) * pageSize;
    let end = pageNumber * pageSize;
    let tableList = diningTableList.slice(start, end);
    return {
      code: 20000,
      data: {
        total: tableList.length,
        items: tableList,
      },
    };
}

};


