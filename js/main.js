window.addEventListener('DOMContentLoaded', function () {
    // Scroll-up
    const buttonsWrapper = document.querySelector('.buttons-wrapper');
    const scrollBtn = document.querySelector('.scroll-up');

    function showScrollUp() {
        if (this.scrollY > 1000) {
            buttonsWrapper.classList.add('buttons-wrapper--active');
            scrollBtn.classList.add('scroll-up--active');
        } else {
            buttonsWrapper.classList.remove('buttons-wrapper--active');
            scrollBtn.classList.remove('scroll-up--active');
        };
    };

    function scrollToTop() {
        window.scroll(0, 0);
    };

    scrollBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', showScrollUp);


    // Mobile menu
    const burgerButton = document.querySelector('#burger-button');
    const mobileMenu = document.querySelector('.header__wrapper-row');
    const mobileNavigation = document.querySelector('#mobile-navigation');
    const navigationSublistBtn = document.querySelector('.navigation__list-button');
    const navigationSublist = document.querySelector('.navigation__sublist');

    function openNavigationSublist() {
        const isOpen = navigationSublistBtn.classList.toggle('navigation__list-button--active');
        if (isOpen) {
            navigationSublist.style.maxHeight = navigationSublist.scrollHeight + 'px';
        } else {
            navigationSublist.style.maxHeight = '0px';
        }
    };

    function closeNavigationSublist(event) {
        if (event.target !== navigationSublistBtn && event.target !== navigationSublist) {
            navigationSublist.style.maxHeight = '0px';
            navigationSublistBtn.classList.remove('navigation__list-button--active');
        };
    };

    function closeNavigationSublistToKey(event) {
        if (event.key === 'Escape') {
            navigationSublist.style.maxHeight = '0px';
            navigationSublistBtn.classList.remove('navigation__list-button--active');
        };
    };

    function openMobileMenu() {
        burgerButton.classList.toggle('burger-button--active');
        mobileMenu.classList.toggle('header__wrapper-row--mobile-menu');
        mobileNavigation.classList.toggle('mobile-navigation--open')
        document.body.classList.toggle('scroll-lock')
    };

    document.addEventListener('click', closeNavigationSublist);
    document.addEventListener('keydown', closeNavigationSublistToKey)
    navigationSublistBtn.addEventListener('click', openNavigationSublist);
    burgerButton.addEventListener('click', openMobileMenu);

    // Mobile Sublist
    const mobileSublistButton = document.querySelector('#mobile-sublist-button');
    const mobileSublist = document.querySelector('#mobile-sublist');

    function openMobileSublist() {
        const isOpen = mobileSublistButton.classList.toggle('active');
        if (isOpen) {
            mobileSublist.style.maxHeight = mobileSublist.scrollHeight + 'px';
        } else {
            mobileSublist.style.maxHeight = '0px';
        }
    };
    mobileSublistButton.addEventListener('click', openMobileSublist);

    // Price Dropdown
    const btnDropdown = document.querySelectorAll('.acordion-button');
    const btnSubDropdown = document.querySelectorAll('.acordion-subbutton');
    const btnSubDropdownTwo = document.querySelectorAll('.acordion-subbutton-two');

    btnSubDropdownTwo.forEach(btn => {
        btn.addEventListener('click', function () {
            const parentBtn = btn.parentElement;
            const sublist = parentBtn.querySelector('.acordion-wrapper');
            const isOpen = btn.classList.toggle('acordion-subbutton-two--active');
            if (isOpen) {
                sublist.classList.toggle('acordion-wrapper--open')
            } else {
                sublist.classList.toggle('acordion-wrapper--open')
            };
        })
    });
    btnSubDropdown.forEach(btn => {
        btn.addEventListener('click', function () {
            const parentBtn = btn.parentElement;
            const sublist = parentBtn.querySelector('.acordion-wrapper');
            const isOpen = btn.classList.toggle('acordion-subbutton--active');
            if (isOpen) {
                sublist.classList.toggle('acordion-wrapper--open')
            } else {
                sublist.classList.toggle('acordion-wrapper--open')
            };
        })
    });
    btnDropdown.forEach(btn => {
        btn.addEventListener('click', function () {
            const parentBtn = btn.parentElement;
            const sublist = parentBtn.querySelector('.acordion-wrapper');
            const isOpen = btn.classList.toggle('acordion-button--active');
            if (isOpen) {
                sublist.classList.toggle('acordion-wrapper--open')
            } else {
                sublist.classList.toggle('acordion-wrapper--open')
            };
        });
    });

    // Price Btn
    if (document.querySelector('.price-btn__btn')) {
        const priceBtnphysical = document.querySelector('.price-btn__physical');
        const priceBtnCorporate = document.querySelector('.price-btn__corporate');
        const sectionPhysical = document.querySelector('.prices-physical');
        const sectionCorporate = document.querySelector('.prices-corporate');

        function togglePriceBtnCorporate() {
            priceBtnphysical.classList.remove('price-btn__btn--active');
            priceBtnCorporate.classList.add('price-btn__btn--active');
            sectionPhysical.classList.add('prices-physical--close');
            sectionCorporate.classList.remove('prices-corporate--close');
        };

        function togglePriceBtnPhysical() {
            priceBtnCorporate.classList.remove('price-btn__btn--active');
            sectionCorporate.classList.add('prices-corporate--close');
            priceBtnphysical.classList.add('price-btn__btn--active');
            sectionPhysical.classList.remove('prices-physical--close');
        };

        priceBtnCorporate.addEventListener('click', togglePriceBtnCorporate);
        priceBtnphysical.addEventListener('click', togglePriceBtnPhysical);
    };

    // Form Dropdown
    document.querySelectorAll('.form__dropdown').forEach(function (dropdown) {
        const dropdownBtn = dropdown.querySelector('.form__dropdown-button');
        const dropdownMenu = dropdown.querySelector('.form__dropdown-list');
        const dropdownItem = dropdownMenu.querySelectorAll('.form__dropdown-item');
        const dropdownBtnText = dropdown.querySelector('.form__dropdown-text');
        const inputHidden = dropdown.querySelector('.input-hidden');
        function openDropdownMenu() {
            dropdownMenu.classList.toggle('form__dropdown-list--open');
        };

        function writeDropdownMenu(event) {
            event.stopPropagation();
            dropdownBtnText.innerText = this.innerText;
            dropdownBtnText.classList.add('form__dropdown-text--active-text');
            dropdownBtn.focus();
            inputHidden.value = this.dataset.value;
            dropdownMenu.classList.remove('form__dropdown-list--open');
        };
        function closeDropdownToClick(event) {
            if (event.target !== dropdownBtn) {
                dropdownMenu.classList.remove('form__dropdown-list--open');
            };
        };
        function closeDropdownToKey(event) {
            if (event.key === 'Tab' || event.key === 'Escape') {
                dropdownMenu.classList.remove('form__dropdown-list--open');
            };
        };

        dropdownBtn.addEventListener('click', openDropdownMenu);
        dropdownItem.forEach(item => {
            item.addEventListener('click', writeDropdownMenu);
        });
        document.addEventListener('click', closeDropdownToClick);
        document.addEventListener('keydown', closeDropdownToKey);
    });

    // Dialog
    const dialog2 = document.querySelector('#dialog-2');
    const btnCallDialog = document.querySelector('.button-call');
    function openDialog2() {
        dialog2.showModal();
    };

    btnCallDialog.addEventListener('click', openDialog2)

    if (document.querySelector('#dialog-3')) {
        const dialog3 = document.querySelector('#dialog-3');
        const btnConsultationDialog = document.querySelectorAll('.btn-modal');
        btnConsultationDialog.forEach(btn => {
            btn.addEventListener('click', openDialog3);
        })
        function openDialog3() {
            dialog3.showModal();
        };
    };
    if (document.querySelector('#dialog-4')) {
        const btnMasterDialog = document.querySelector('.btn-dialog-form');
        const dialog4 = document.querySelector('#dialog-4');

        function openDialog4() {
            dialog4.showModal();
        };

        btnMasterDialog.addEventListener('click', openDialog4);
    };

    // Закрытие модального окна
    const btnCloseDialog = document.querySelectorAll('.dialog-close-button');
    btnCloseDialog.forEach(btn => {
        btn.addEventListener('click', function () {
            const dialog = this.closest('dialog');
            dialog.close();
        });
    });

    document.addEventListener('click', function (event) {
        const dialog = document.querySelectorAll('dialog');
        dialog.forEach(item => {
            if (event.target === item) {
                item.close();
            };
        });
    });



    // Forms
    // Validation Form
    function validation(form) {

        function removeErrorCheckbox(input) {
            const parentLabel = input.parentElement;
            const parentCheckbox = parentLabel.parentElement;
            if (parentCheckbox.classList.contains('error')) {
                parentCheckbox.classList.remove('error')
            };
        };

        function creatErrorCheckbox(input) {
            const parentLabel = input.parentElement;
            const parentCheckbox = parentLabel.parentElement;
            parentCheckbox.classList.add('error');

        };

        function removeError(input) {
            const parent = input.parentElement;
            if (parent.classList.contains('error')) {
                parent.querySelector('.error-label').remove();
                parent.classList.remove('error');
            };
        };

        function creatError(input, text) {
            const parent = input.parentElement;
            const errorLabel = document.createElement('span');
            errorLabel.classList.add('error-label');
            errorLabel.textContent = text;
            parent.classList.add('error');
            parent.append(errorLabel)
        };

        let result = true;

        const inputs = form.querySelectorAll('.input-js');
        for (const input of inputs) {

            removeError(input);
            removeErrorCheckbox(input);

            input.addEventListener('focus', function () {
                removeError(input);
                removeErrorCheckbox(input);
            });

            // Максимальное количество символов
            if (input.dataset.maxLength) {
                if (input.value.length > input.dataset.maxLength) {
                    removeError(input);
                    creatError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
                    result = false;
                };
            };

            // Минимальное количество символов
            if (input.dataset.minLength) {
                if (input.value.length < input.dataset.minLength) {
                    removeError(input);
                    creatError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
                    result = false;
                };
            };

            // Name
            if (input.dataset.name) {
                const regex = /[A-Za-zA-Яа-яЁё]/;
                if (!regex.test(input.value)) {
                    removeError(input);
                    creatError(input, 'Только буквенные значения')
                    result = false;
                }
            };

            // Phone
            if (input.dataset.phone) {
                const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
                if (!regex.test(input.value)) {
                    removeError(input);
                    creatError(input, 'Только числовые значения')
                    result = false;
                }
            };

            // Пустое поле
            if (input.dataset.required == 'true') {
                if (input.value == '') {
                    removeError(input);
                    creatError(input, 'Пустое поле')
                    result = false;
                };
            };

            // Checkbox
            if (input.classList.contains('checkbox-hidden')) {

                if (input.checked) {
                    removeErrorCheckbox(input);
                } else if (!input.checked) {
                    removeErrorCheckbox(input);
                    creatErrorCheckbox(input);
                    result = false;
                }
            };
        };

        return result;
    }

    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            if (validation(this) == true) {
                // Сбор данных формы
                const { elements } = form;
                const data = Array.from(elements)
                    .filter((item) => !!item.name)
                    .map((element) => {
                        const { name, value } = element
                        return { name, value }
                    });
                console.log(data)
                const dialog6 = document.querySelector('#dialog-6');
                const dialog5 = document.querySelector('#dialog-5');
                const dialog1 = document.querySelector('#dialog-1');
                const dialog3 = document.querySelector('#dialog-3');
                const dialog4 = document.querySelector('#dialog-4');

                switch (form.id) {
                    case 'dialog2-form':
                        dialog2.close();
                        dialog5.showModal();
                        break
                    case 'fedback-form':
                        dialog1.showModal();
                        break
                    case 'dialog3-form':
                        dialog3.close();
                        dialog5.showModal();
                        break
                    case 'dialog4-form':
                        dialog4.close();
                        dialog6.showModal();
                        break
                    case 'blog1-form':
                        dialog5.showModal()
                        break
                    case 'main-form':
                    case 'blog2-form':
                    case 'contact-form':
                    case 'repair-form':
                        dialog6.showModal()
                        break
                };
            }
            // validation(this)
            // removeError();
            // checkEmptyField();
        });
    });

    // Active Links
    const navLinks = document.querySelectorAll('.navigation__list-link');
    const link = window.location.href;
    navLinks.forEach(linksItem => {
        if (linksItem.href === link) {
            linksItem.classList.add('navigation__list-link--active');
            if (window.location.pathname === '/index.html') {
                linksItem.classList.remove("navigation__list-link--active");
            };
        } else {
            linksItem.classList.remove('navigation__list-link--active');
        };
    });

    const navServicesLinks = document.querySelectorAll('.repair-navigation__list a');
    navServicesLinks.forEach(linksItem => {

        if (linksItem.href === link) {
            linksItem.classList.add('navigation__list-link--active')
        } else {
            linksItem.classList.remove('navigation__list-link--active')
        };
        if (linksItem.classList.contains('navigation__list-link--active')) {
            const navButton = document.querySelector('.navigation__list-button');
            navButton.classList.add('active')
        };
    });
})