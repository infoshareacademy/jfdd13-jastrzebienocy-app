function getFeeds() {
    let feeds = [];
  
    feeds.push({
      title: 'Visits',
      data: getRandomDateArray(150)
    });
  
    feeds.push({
      title: 'Categories',
      data: getRandomArray(20)
    });
  
    feeds.push({
      title: 'Categories',
      data: getRandomArray(10)
    });
  
    feeds.push({
      title: 'Data 4',
      data: getRandomArray(6)
    });
  
    return feeds;
  }

export default Chart.Data;