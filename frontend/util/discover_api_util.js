export const fetchRecommended = () => (
  $.ajax({
    method: 'GET',
    url: 'api/discover/recommended'
  })
);

export const fetchEditorsChoicePhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/discover/editorschoice'
  })
);
