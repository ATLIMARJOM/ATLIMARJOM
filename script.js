document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // MENU MOBILE
    // ==========================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        // Abre e fecha o menu ao clicar no ícone hambúrguer
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer item do menu
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // BUSCA INTERATIVA DE BAIRROS DA COLETA
    // ==========================================
    const searchInput = document.getElementById('neighborhoodSearch');
    const clearSearchBtn = document.getElementById('clearSearch');
    const searchResultsCount = document.getElementById('searchResultsCount');

    if (searchInput) {
        const normalizeText = (text) => {
            return text
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .trim();
        };

        const handleSearch = () => {
            const query = normalizeText(searchInput.value);

            if (clearSearchBtn) {
                clearSearchBtn.style.display = query ? 'block' : 'none';
            }

            const neighborhoodTags = document.querySelectorAll('.neighborhood-tag');
            const dayCards = document.querySelectorAll('.day-card');
            const truckCards = document.querySelectorAll('.truck-card');

            if (!query) {
                neighborhoodTags.forEach(tag => tag.classList.remove('highlight-match'));
                dayCards.forEach(card => card.classList.remove('hidden-by-search'));
                truckCards.forEach(card => card.classList.remove('hidden-by-search'));
                if (searchResultsCount) searchResultsCount.textContent = '';
                return;
            }

            let matchCount = 0;

            // Filtra tags de bairros
            neighborhoodTags.forEach(tag => {
                const text = normalizeText(tag.textContent);
                if (text.includes(query)) {
                    tag.classList.add('highlight-match');
                    matchCount++;
                } else {
                    tag.classList.remove('highlight-match');
                }
            });

            // Filtra cards de dias
            dayCards.forEach(card => {
                const hasMatch = card.querySelectorAll('.neighborhood-tag.highlight-match').length > 0;
                if (hasMatch) {
                    card.classList.remove('hidden-by-search');
                } else {
                    card.classList.add('hidden-by-search');
                }
            });

            // Filtra cards de caminhões
            truckCards.forEach(card => {
                const hasMatch = card.querySelectorAll('.day-card:not(.hidden-by-search)').length > 0;
                if (hasMatch) {
                    card.classList.remove('hidden-by-search');
                } else {
                    card.classList.add('hidden-by-search');
                }
            });

            // Atualiza a mensagem de contagem de resultados
            if (searchResultsCount) {
                if (matchCount === 0) {
                    searchResultsCount.textContent = `Nenhum bairro encontrado para "${searchInput.value}".`;
                    searchResultsCount.style.color = '#DC2626';
                } else if (matchCount === 1) {
                    searchResultsCount.textContent = `1 bairro encontrado para "${searchInput.value}".`;
                    searchResultsCount.style.color = 'var(--primary-dark)';
                } else {
                    searchResultsCount.textContent = `${matchCount} bairros encontrados para "${searchInput.value}".`;
                    searchResultsCount.style.color = 'var(--primary-dark)';
                }
            }
        };

        searchInput.addEventListener('input', handleSearch);

        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                handleSearch();
                searchInput.focus();
            });
        }
    }
});
