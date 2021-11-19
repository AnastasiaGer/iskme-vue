<template>
  <header class="header">
    <nav class="header-nav">
      <ul class="site-navigation">
        <li class="site-navigation-item">
          <a href="#" class="site-navigation-link">Logo</a>
        </li>
        <li class="site-navigation-item">
          <a href="#" class="site-navigation-link">Discover</a>
        </li>
        <li class="site-navigation-item">
          <a href="#" class="site-navigation-link">Community</a>
        </li>
        <li class="site-navigation-item">
          <a href="#" class="site-navigation-link">About</a>
        </li>
        <li class="site-navigation-item">
          <a href="#" class="site-navigation-link">Logo-small</a>
        </li>
      </ul>

      <ul class="user-navigation">
        <li class="user-navigation-item" aria-label="Search">
          <a href="#">
            <span class="visually-hidden">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="35px"
              height="35px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
                fill="#484F60"
              />
            </svg>
          </a>
        </li>
        <li class="user-navigation-item" aria-label="Notes">
          <a href="#">
            <span class="visually-hidden">Notes</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="35px"
              height="35px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 22a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22zm7-7.414V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v4.586l-1.707 1.707A.996.996 0 0 0 3 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1a.996.996 0 0 0-.293-.707L19 14.586z"
                fill="#484F60"
              />
            </svg>
          </a>
        </li>
        <li class="user-navigation-item" aria-label="Log In">
          <a href="#">
            <span class="visually-hidden">Log In</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="35px"
              height="35px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 16 16"
            >
              <g fill="#484F60">
                <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

    <div class="search-nav">
      <ul class="search-nav-list">
        <li class="search-nav-list-item search-nav-list-item--active">
          <a href="#" class="search-nav-link">Browse Exchange</a>
        </li>
        <li class="search-nav-list-item">
          <a href="#" class="search-nav-link">Search Exchange</a>
        </li>
        <li class="search-nav-list-item">
          <a href="#" class="search-nav-link">Mappings</a>
        </li>
        <li class="search-nav-list-item">
          <a href="#" class="search-nav-link">Review Records</a>
        </li>
        <li class="search-nav-list-item">
          <a href="#" class="search-nav-link">Preferences</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style>
.header {
  background: #d8d8d8;
  margin: 0;
  padding: 0 50px;
}
.header-nav,
.search-nav {
  display: flex;

  height: 60px;
}

.header-nav {
  border-bottom: 1px solid #adb0b6;
}

.header-nav {
  justify-content: space-between;
}
.search-nav {
  justify-content: flex-start;
}
.site-navigation,
.search-nav-list {
  list-style: none;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 10px;
}

.site-navigation-item {
  width: 160px;
}

.site-navigation-link, .search-nav-link {
  font-family: "Montserrat", Arial, sans-serif;

  color: #2c3e50;
  text-decoration: none;
}

.site-navigation-link:hover, .search-nav-link:hover {
  text-decoration: underline;
}

.user-navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}

.user-navigation-item {
  margin: 0 10px;
}

.search-nav-list-item {
  width: 210px;
}

.search-nav-list-item--active {
  font-weight: 700;
}
</style>