const elements = document.querySelector('.elements');
const popupEditElement = document.querySelector('.popup_edit-element');
const popupAddElement = document.querySelector('.popup_add-element');
const popupEditForm = popupEditElement.querySelector('.popup__form');
const popupAddForm = popupAddElement.querySelector('.popup__form');
const inputUserName = popupEditElement.querySelector('.popup__input_field_name');
const inputUserDescription = popupEditElement.querySelector('.popup__input_field_description');
const inputUserPhoto = popupEditElement.querySelector('.popup__input_field_avatar');
const inputCardTitle = popupAddElement.querySelector('.popup__input_field_place');
const inputCardLink = popupAddElement.querySelector('.popup__input_field_link');
const popupFullImage = document.querySelector('.popup_full-image');
const crossPopupEdit = popupEditElement.querySelector('.popup__cross');
const crossPopupAdd = popupAddElement.querySelector('.popup__cross');
const imagePopupCross = popupFullImage.querySelector('.popup__cross');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileAvatar = document.querySelector('.profile__avatar');
const template = document.querySelector('#elements-template').content;
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
const initialCards = [
  {
    name: 'Алмаз-Антей',
    link: 'https://sun9-50.userapi.com/impg/oPdNREbvrnUJQNUvjHeL5hxmFSpkmfNMPNJjGw/EJTdDFzElr4.jpg?size=2560x1920&quality=95&sign=1cbda6aac7bfdfc598ae1feee4d81231&type=album'
  },
  {
    name: 'Волга',
    link: 'https://sun9-6.userapi.com/impg/YotC3exf19t7zxts4JGJy2jAT0iNFCf5TNtzww/YnULvqL5tb8.jpg?size=2560x1920&quality=95&sign=d81635620f8827f1f4aa8d9638d40049&type=album'
  },
  {
    name: 'Moscow City',
    link: 'https://sun9-69.userapi.com/impg/Cd0iQcm-5ZRrtTVbzhOaUErU4sDcnxqzYX3OEg/-pyZ98atP9M.jpg?size=1620x2160&quality=95&sign=53a2d77f2661e0c5b541a67ede351374&type=album'
  },
  {
    name: 'Борский мост',
    link: 'https://sun9-78.userapi.com/impg/mJiJVaRwkuSVrOmjj1-Gjprfe2CaQDO3-YGQAA/_RhpZNAeuWw.jpg?size=2560x1920&quality=95&sign=d89f777edb595e9f64cf213a30954070&type=album'
  },
  {
    name: 'Памятник МиГ-17',
    link: 'https://sun9-69.userapi.com/impg/wIxsyRJ_azFr-XGPqg0-QP1xgeE1NkaL8GB5ow/Eq-9GRQa4zg.jpg?size=1620x2160&quality=95&sign=a3301d628e17281ace025ceade573f3c&type=album'
  },
  {
    name: 'Химки',
    link: 'https://sun9-47.userapi.com/impg/BsNhEg6dDZ75Co1KyQ-fotDXwL4GKvng2H5ehQ/IXyc5Wb94b0.jpg?size=2560x1920&quality=95&sign=38ac38b398396a2dddffdaf630bea869&type=album'
  },
  {
    name: 'Дворец спорта "Юность"',
    link: 'https://sun9-1.userapi.com/impg/ZsJniGup4DJD_cywqBbmGPQeXy0TvVIa6L_uMQ/jRsNfPEjYqY.jpg?size=2560x1920&quality=95&sign=0a3e8c0993acf6ce969b73ee462b3825&type=album'
  },
  {
    name: 'Сормовский парк',
    link: 'https://sun9-26.userapi.com/impg/WqYUcGoYrzLUZh39tsJjFf7vQV0GS-C6Fn9q9A/NKXhwZLM2Rw.jpg?size=2560x1920&quality=95&sign=db37df73c5011c096e7dfd03f34edf27&type=album'
  },
  {
    name: 'Печёры',
    link: 'https://sun9-58.userapi.com/impg/mbr4uDqMpPlVFwPPXuOsA5DJNo3KykuB-eKEFw/MNrmmzFeh34.jpg?size=1620x2160&quality=95&sign=78cc4ba231d678c6be8d0f875d424191&type=album'
  },
  {
    name: 'Собор Александра Невского',
    link: 'https://sun9-82.userapi.com/impg/JIy1WrDuxT507PgvS6oZsG_qmT_0SFHJomY6ow/M81-ds1RiC8.jpg?size=1620x2160&quality=95&sign=e7ca7e92631c8e41bb13e733bc77664f&type=album'
  },
  {
    name: 'Кул-Шариф',
    link: 'https://sun9-87.userapi.com/impg/sSgtVgKkMCF1U5lppJQ-RJ8lRlH1cqv_kKxcAg/5F7yua4N8Ds.jpg?size=2560x1920&quality=95&sign=a7ad2bcc0993bd2649cf6900ba8e59a2&type=album'
  },
  {
    name: 'ННГАСУ',
    link: 'https://sun9-86.userapi.com/impg/9sFQRNnH9X9yfZvtHebpzyXW6JCN1U18IP6stg/mzZ3xPF7GMg.jpg?size=1620x2160&quality=95&sign=90a5d6438c8ad1f7f31f80299ebc0099&type=album'
  }
];

//Создание элементов
function createElement(elName, elLink) {
  const element = template.querySelector('.elements__element').cloneNode(true);
  const elementRemove = element.querySelector('.elements__remove');
  const elementPicture = element.querySelector('.elements__picture');
  const elementText = element.querySelector('.elements__text');
  const elementLike = element.querySelector('.elements__like');

  elementPicture.src = elLink;
  elementPicture.alt = elName;
  elementText.textContent = elName;

  elementLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })

  elementRemove.addEventListener('click', function () {
    element.remove();
  })

 elementPicture.addEventListener('click', function (evt) {
    openPopup(popupFullImage);
    popupImage.alt = evt.target.alt;
    popupImage.src = evt.target.src;
    popupFigcaption.textContent = elementText.textContent;
  })
  return element;
}

//Добавление элемента в начало
function addElement(el) {
  elements.prepend(el);
}

//Добавление элементов из шаблона
function addDefaultElements() {
  for (let i = 0; i < initialCards.length; i++) {
    addElement(createElement(initialCards[i].name, initialCards[i].link));
  }
}

addDefaultElements();

//Открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//Закрытие попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//Сохранение формы
function submitEditProfileForm() {
  event.preventDefault();
  profileName.textContent = inputUserName.value;
  profileDescription.textContent = inputUserDescription.value;
  profileAvatar.src = inputUserPhoto.value;
  closePopup(popupEditElement);
}

//Нажатие на кнопку редактирования профиля
buttonEdit.addEventListener('click', function(){
  openPopup(popupEditElement);
  inputUserName.value=profileName.textContent;
  inputUserDescription.value=profileDescription.textContent;
  inputUserPhoto.value=profileAvatar.src;
});

//Нажатие на кнопку добавления элемента
buttonAdd.addEventListener('click', function(){
  openPopup(popupAddElement);
});

//Нажатие на крестик попапа изменения элемента
crossPopupEdit.addEventListener('click', () => {
  closePopup(popupEditElement);
});

//Нажатие на крестик попапа добавления элемента
crossPopupAdd.addEventListener('click', () => {
  inputCardTitle.value = "";
  inputCardLink.value = "";
  closePopup(popupAddElement);
})

//Нажатие на крестик попапа просмотра фотографии
imagePopupCross.addEventListener('click', () => {
  closePopup(popupFullImage);
})

//Сохранение изменений формы попапа изменения элемента
popupEditForm.addEventListener('submit', submitEditProfileForm);

//Сохранение изменений формы попапа добавление элемента
popupAddForm.addEventListener('submit', () => {
  event.preventDefault();
  const place = inputCardTitle.value;
  const link = inputCardLink.value;
  const element = createElement(place, link);
  addElement(element);
  inputCardTitle.value = "";
  inputCardLink.value = "";
  closePopup(popupAddElement);
});