# Air Quality Report: Emotional & Environmental

A five-day retrospective on clarity, chaos, and career applications.  
Covering **June 16 – 20, 2025**

## 🌍 What is This?

This project is a visual dashboard built with **React + Vite + Recharts** that explores:

1. **Air Quality Index (AQI)** levels in 8 Asian cities  
2. **Product Manager (PM) job openings** scraped from Google Jobs  
3. **Social connection levels** as a self-assessed metric of personal ties  
4. The tension between *ambition* and *atmosphere* when making life decisions

## 🌐 Cities Covered

- Jakarta  
- Kuala Lumpur  
- Singapore  
- Taipei  
- Hong Kong  
- Bangkok  
- Manila  
- Dubai

## ✨ Features

- **City-specific AQI & Job Opening Charts** for each day (Mon–Fri)  
- **Cross-city Comparison Charts**:
  - All cities' AQI levels on one graph, emoji-annotated (1 = 🌿, 5 = ☠️)
  - All cities' PM job openings on one graph
- **🌍 Social Connection Chart** with emoji scale:
  - 🌱 Open to building  
  - 😊 Acquaintances  
  - 💛 Friends nearby  
  - ❤️‍🔥 Deep roots  
- Custom tooltips and dual Y-axis labeling  
- Emojis used as visual storytelling devices  
- Clean layout for recording or presentation

## ⚡ Tech Stack

- Vite  
- React  
- Recharts  
- Node.js for fetching historical AQI from OpenWeather

## 🌐 Data Sources

- **AQI**: OpenWeatherMap Air Pollution API (historical endpoint)  
- **Jobs**: Manually scraped from Google Jobs ("Product Manager") on June 20, filtered by city and date posted (June 16–20 only)  
- **Social connection**: Self-assessed familiarity scores on a 1–4 scale

## 🎝️ Storytelling Angle

> "When you're choosing where to live and work, you're not just chasing jobs — you're breathing the consequences."

This dashboard is part of a personal exploration into career moves, where **opportunity**, **environment**, and **emotional roots** are equally weighted inputs.


## 🚀 How to Run Locally

1. Clone the repo

```bash
git clone https://github.com/AlvitaChen/breathe-retrospective.git
cd breathe-retrospective
```

2. Install dependencies

```bash
npm install
```

3. Start dev server

```bash
npm run dev
```

Local dashboard should now be visible at [http://localhost:5173](http://localhost:5173)

## 🌌 Future Ideas

- Integrate **real-time AQI** feed
- Add **cost of living index** from Numbeo
- Visualize **emotional journal** alongside city metrics
- Export to PDF for personal retrospectives

## 🤠 Author

Made with care and insomnia.

---

> "Go outside, have coffee with recruiters, and refresh your portfolio."

(Unless the AQI says ☠️. Then maybe just journal with iced coffee.)
