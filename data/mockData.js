const generateAvailability = (price, free) => {
  const avaliabiliyMock = [];

  for (let i = 0; i < 300; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);

    avaliabiliyMock.push({
      date: currentDate.toLocaleDateString("en-GB"),
      price: ((price * 10) / 9).toFixed(1),
      free: free,
    });
  }

  return avaliabiliyMock;
};

const imgUrls = [
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
  "https://picsum.photos/200",
];

const data = [
  {
    id: 1,
    title: "Milan Textile tour",
    description: "A  tour of the Milan Textile district with a local guide",
    tourGuide: "Giuseppe conte",
    totalTime: 7,
    tourPlan: [
      "Meet at 10am",
      "Visit zara milan factory",
      "Visit gucci milan factory",
      "Visit prada milan factory",
      "lunch at 2pm",
      "Visit armani milan factory",
      "Visit versace milan factory",
      "wine tasting at 5pm",
      "Visit showrooms and shops",
    ],
    availability: generateAvailability(100, 10),
    imgUrls: imgUrls,
    meetingPointLink:
      "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4627338,9.1777323,12z/data=!3m1!4b1!4m6!3m5!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.4642035!4d9.189982!16zL20vMDk0N2w?entry=ttu",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 4,
        title: "Great tour",
        review:
          "This was a great tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 2,
        user: "Jane Doe",
        rating: 5,
        title: "Amazing tour",
        review:
          "This was an amazing tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 3,
        user: "John Smith",
        rating: 3,
        title: "Good tour",
        review:
          "This was a good tour, I learned a lot about the fashion industry in Milan",
      },
    ],
  },
  {
    id: 2,
    title: "Milan Gastromic Busines tour",
    description: "A  tour of the Milan Gastromic district with a local guide",
    tourGuide: "Giuseppe conte",
    totalTime: 5,
    tourPlan: [
      "Meet at 10am",
      "Visit Armani Caffe",
      "Visit Princi",
      "Visit Pasticceria Marchesi",
      "lunch at 2pm",
      "Visit Ristorante Berton",
      "Visit Ristorante Cracco",
      "wine tasting at 5pm",
    ],
    availability: generateAvailability(150, 10),
    imgUrls: imgUrls,
    meetingPointLink:
      "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4627338,9.1777323,12z/data=!3m1!4b1!4m6!3m5!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.4642035!4d9.189982!16zL20vMDk0N2w?entry=ttu",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 4,
        title: "Great tour",
        review:
          "This was a great tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 2,
        user: "Jane Doe",
        rating: 5,
        title: "Amazing tour",
        review:
          "This was an amazing tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 3,
        user: "John Smith",
        rating: 3,
        title: "Good tour",
        review:
          "This was a good tour, I learned a lot about the fashion industry in Milan",
      },
    ],
  },
  {
    id: 3,
    title: "Milan medical Business tour",
    description: "A  tour of the Milan medical district with a local guide",
    tourGuide: "Giuseppe conte",
    totalTime: 5,
    tourPlan: [
      "Meet at 10am",
      "Visit Ospedale Maggiore Policlinico",
      "Visit Istituto Clinico Humanitas",
      "Visit Ospedale San Raffaele",
      "lunch at 2pm",
      "Visit Istituto Europeo di Oncologia",
      "Visit Ospedale Niguarda Ca' Granda",
    ],
    availability: generateAvailability(200, 10),
    imgUrls: imgUrls,
    meetingPointLink:
      "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4627338,9.1777323,12z/data=!3m1!4b1!4m6!3m5!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.4642035!4d9.189982!16zL20vMDk0N2w?entry=ttu",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 4,
        title: "Great tour",
        review:
          "This was a great tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 2,
        user: "Jane Doe",
        rating: 5,
        title: "Amazing tour",
        review:
          "This was an amazing tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 3,
        user: "John Smith",
        rating: 3,
        title: "Good tour",
        review:
          "This was a good tour, I learned a lot about the fashion industry in Milan",
      },
    ],
  },
  {
    id: 4,
    title: "Milan metal Business tour",
    description: "A  tour of the Milan metal district with a local guide",
    tourGuide: "Giuseppe conte",
    totalTime: 5,
    tourPlan: [
      "1.Meet at 10am",
      "Visit Ospedale Maggiore Policlinico",
      "Visit Istituto Clinico Humanitas",
      "Visit Ospedale San Raffaele",
      "lunch at 2pm",
      "Visit Istituto Europeo di Oncologia",
    ],
    availability: generateAvailability(250, 10),
    imgUrls: imgUrls,
    meetingPointLink:
      "https://www.google.com/maps/place/Milan,+Metropolitan+City+of+Milan,+Italy/@45.4627338,9.1777323,12z/data=!3m1!4b1!4m6!3m5!1s0x4786c1493f1275e7:0x3cffcd13c6740e8d!8m2!3d45.4642035!4d9.189982!16zL20vMDk0N2w?entry=ttu",
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 4,
        title: "Great tour",
        review:
          "This was a great tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 2,
        user: "Jane Doe",
        rating: 5,
        title: "Amazing tour",
        review:
          "This was an amazing tour, I learned a lot about the fashion industry in Milan",
      },
      {
        id: 3,
        user: "John Smith",
        rating: 3,
        title: "Good tour",
        review:
          "This was a good tour, I learned a lot about the fashion industry in Milan",
      },
    ],
  },
];

export default data;
