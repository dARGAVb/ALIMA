console.clear();

class musicPlayer {
    



	constructor() {






		
        const audio = new Audio('work/sound/HORIZON.mp3'); // заменишь на свою ссылку или путь к файлу
		this.play = this.play.bind(this);
		this.playBtn = document.getElementById('play');
		this.playBtn.addEventListener('click', this.play);
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
		// Создаём аудио-объект (замени 'your-music.mp3' на свой файл или ссылку)

// Находим кнопку "Play" по id
const playButton = document.getElementById('play');

// Логика нажатия - проиграть или поставить на паузу
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.add('playing');  // Можно добавить класс, чтобы поменять стиль кнопки (например, иконку)
    } else {
        audio.pause();
        playButton.classList.remove('playing');
    }
});
const controlPanel = document.querySelector('.control-panel');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
    controlPanel.classList.toggle('active');
});

	}

	play() {
		let controlPanelObj = this.controlPanel,
		infoBarObj = this.infoBar
		Array.from(controlPanelObj.classList).find(function(element){
					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
			});
		
		Array.from(infoBarObj.classList).find(function(element){
					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
			});
	}
}













const newMusicplayer = new musicPlayer();