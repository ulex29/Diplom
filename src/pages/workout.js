import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styles from '../css/workout.module.css';

function WorkoutHeader() {
  return (
    <header className={styles.header}> {/* Применение класса стилей */}
      <Helmet>
        <title>Займись делом! | Тренировки</title>
        <link rel="icon" type="image/png" href="img/fire32.png" />
      </Helmet>
      <nav>
        <div className={styles.logo}>
          <img src='img/fire32.png' alt="Логотип" />
          <h1>Займись делом! | Тренировки</h1>
        </div>
        <ul className={styles['menu-bar']}> {/* Применение класса стилей */}
          <li><a href="/">Главная</a></li>
          <li><a href="/about">О проекте</a></li>
          <li><a href="/workout">Тренировки</a></li>
          <li><a href="/results">Результаты</a></li>
          <li><a href="/login">Личный кабинет</a></li>
        </ul>
      </nav>
    </header>
  );
}

function WorkoutMain() {
  const categories = ['Мышцы', 'Сжигание', 'Здоровье'];

  const workouts = [
    { category: 'Мышцы', name: 'Тренировка мышц', image: 'img/fakuha.png', description: 'Описание тренировки мышц' },
    { category: 'Сжигание', name: 'Тренировка на сжигание жира', image: 'img/fakuha.png', description: 'Описание тренировки на сжигание жира' },
    { category: 'Здоровье', name: 'Тренировка для здоровья', image: 'img/fakuha.png', description: 'Описание тренировки для здоровья' },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Выбранный виджет по умолчанию

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredWorkouts = workouts.filter((workout) => workout.category === selectedCategory);

  const [selectedWorkout, setSelectedWorkout] = useState(null);

  const openModal = (workout) => {
    setSelectedWorkout(workout);
  };

  const closeModal = () => {
    setSelectedWorkout(null);
  };

  const addToFavorites = (workout) => {
    // Логика добавления тренировки в избранное
  };

  return (
    <div className={styles['workout-container']}>
      <div className={styles.widgets}>
                {categories.map((category, index) => (
                    <div key={index} className={`${styles.widget} ${selectedCategory === category ? styles.active : ''}`} onClick={() => selectCategory(category)}>
                        <img src="vid/barsik.gif" alt="Example" />
                        <p>{category}</p>
                    </div>
                ))}
            </div>
      <div className={styles.category}>
        <h2>{selectedCategory}</h2>
        <div className={styles['workout-list']}>
          {filteredWorkouts.map((workout, index) => (
            <div key={index} className={styles['workout-item']} onClick={() => openModal(workout)}>
              <img src={workout.image} alt={workout.name} />
              <h3>{workout.name}</h3>
            </div>
          ))}
        </div>
      </div>
      {selectedWorkout && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <span className={styles.close} onClick={closeModal}>&times;</span>
            <h2>{selectedWorkout.name}</h2>
            <img src={selectedWorkout.image} alt={selectedWorkout.name} />
            <p>{selectedWorkout.description}</p>
            <button onClick={() => addToFavorites(selectedWorkout)}>Добавить в избранное</button>
          </div>
        </div>
      )}
    </div>
  );
}

function WorkoutFooter() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Займись делом!</p>
    </footer>
  );
}

function WorkoutPage() {
  return (
    <div>
      <WorkoutHeader />
      <WorkoutMain />
      <WorkoutFooter />
    </div>
  );
}

export default WorkoutPage;
