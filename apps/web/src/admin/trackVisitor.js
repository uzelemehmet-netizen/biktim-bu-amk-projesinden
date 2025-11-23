// Basit ziyaretçi takibi (dosya tabanlı simülasyon)
export function trackVisitor(pageName = "home") {
  const stats = JSON.parse(localStorage.getItem("siteStats") || "{}" );
  if (!stats[pageName]) {
    stats[pageName] = { visits: 0, lastVisit: "-" };
  }
  stats[pageName].visits += 1;
  stats[pageName].lastVisit = new Date().toLocaleString();
  localStorage.setItem("siteStats", JSON.stringify(stats));
}

// Sekme tıklamalarını takip et
export function trackTabClick(tabName) {
  const tabStats = JSON.parse(localStorage.getItem("tabStats") || "{}");
  if (!tabStats[tabName]) {
    tabStats[tabName] = { clicks: 0, lastClick: "-" };
  }
  tabStats[tabName].clicks += 1;
  tabStats[tabName].lastClick = new Date().toLocaleString();
  localStorage.setItem("tabStats", JSON.stringify(tabStats));
}
