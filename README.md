# 📚 BookFinder

BookFinder is a React-based web application that allows users to **search for books, filter results, and view detailed information** using the [Open Library API](https://openlibrary.org/dev/docs/api/search).  
It was built as part of a take-home challenge to demonstrate clean architecture, UI/UX design, and React development skills.

---

## 🚀 Features

- 🔎 **Search Books** – search by title, author, subject, or year.  
- 🎛 **Filters** – refine search results with multiple filters.  
- 📖 **Book Cards** – clean, modern cards showing book cover, title, author, year, and rating.  
- 🪟 **Book Modal** – click on a book to view detailed information in a modal (authors, editions, languages, subjects, ratings).  
- 🌓 **Responsive Design** – optimized for mobile, tablet, and desktop.  
- ⚡ **Fast State Management** – built using React’s Context API for smooth global state handling.  
- 🖼 **Fallbacks** – handles missing covers or data gracefully.  
- ✅ **Clean UI** – TailwindCSS for modern, polished styling.  

---

## 🛠️ Tech Stack

- **Frontend Framework**: React (with Vite for fast dev build)  
- **Language**: TypeScript  
- **State Management**: React Context API (`useContext`)  
- **Styling**: TailwindCSS  
- **Icons**: Lucide React Icons  
- **API**: Open Library Search API  

---

## ⚙️ Installation & Setup

1. **Clone this repo**
git clone https://github.com/sapphire2207/book-finder.git

2. cd bookfinder

3. **Install dependencies**
npm install

4. **Run development server**
npm run dev

5. **Open app in your browser**  
Visit [http://localhost:5173](http://localhost:5173/)

---

## 🌐 API Reference

This app uses the Open Library Search API:  
`https://openlibrary.org/search.json`

### Query Parameters Supported:
- `title` → Book title  
- `author` → Author name  
- `first_publish_year` → Year of first publication  
- `subject` → Subject or genre  

### Covers are fetched from:  
`https://covers.openlibrary.org/b/id/{coverId}-M.jpg`

---

## 👨‍💻 Author

Developed with ❤️ for a take-home challenge.  
Built using React + TailwindCSS + Context API.

---

## 🚢 Deployment (Optional)

To deploy your BookFinder app easily, you can use platforms like Vercel or Netlify:

- Push your project to a GitHub repository.
- Connect your repo to Vercel or Netlify via their dashboards.
- Select the default build command (`npm run build`) and publish directory (`dist` or as configured by Vite).
- Deploy and share your live link with reviewers.

---

