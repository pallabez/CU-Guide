<template>
    <aside class="sidebar">
      <!--profile image & text-->
      <div class="img-container c-row">
        <img loading="lazy" src="/images/Chandigarh_University_Seal.png" alt="CU LOGO" width="200px" />
      </div>
      <!--menu item-->
      <div class="menu-container">
        <ul>
          <li class="card">
            <a class="card__link" href="#">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="card">
            <a class="card__link" href="https://lms.cuchd.in/" target="_blank">
              <i class="fas fa-book"></i>
              <span>Courses</span>
            </a>
          </li>
          <li class="card">
            <a class="card__link" href="https://www.cuchd.in/admissions/course-fee.php" target="_blank">
              <i class="fas fa-wallet"></i>
              <span>Academic Fees</span>
            </a>
          </li>
          <li class="card">
            <a class="card__link" href="https://uims.cuchd.in/uims/" target="_blank">
              <i class="fas fa-calendar-day"></i>
              <span>Events</span>
            </a>
          </li>
        </ul>
      </div>
      <!--footer-->
      <div class="menu-footer c-row">
        <i class="fas fa-copyright"></i>
        <span>Made by Back Benchers</span>
      </div>
    </aside>
</template>

<style scoped>

.c-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.c-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.sidebar{
    background: rgb(191 168 133);
    width: 300px;
    padding: 20px 0;
    z-index: 2;
    
    overflow-y: scroll;
    transition: all 0.5s ease;
    
    background-color: var(--primary-color);
    color: var(--background);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.sidebar::-webkit-scrollbar {
    display: none;      /* Hide scrollbar for Chrome, Safari and Opera */
}

.sidebar .img-container {
    padding-bottom: 1rem;
    border-bottom: 4px solid rgb(31, 28, 28);
}

.sidebar .menu-container {
    margin-top: 1rem;
}

.sidebar .menu-container .card {
    display: flex;
    align-items: center;

    padding-left: 0.4rem;
    margin: 3px 0;
    height: 4rem;
    font-size: 1.2rem;

    transition: all 0.5s ease;
}

.sidebar .menu-container .card .card__link {
    color: white
}

.sidebar .menu-container .card:hover {
    background-color: var(--secondary-color);

    margin-left: 1rem;
}

.sidebar .menu-container .card span {
    margin-left: 10px;
}

.sidebar .menu-footer {
    align-items: end;
    height: 5rem;
}

.sidebar .menu-footer span {
    font-size: 0.8rem;

    margin-left: 4px;
}
</style>