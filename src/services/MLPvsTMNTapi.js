
const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Try harder';

      return json;
    });
};

export const getMLP = id => {
  return get('')
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.img,
      cutieMark: json.cutieMark,
      coolFactor: json.coolFactor
    }));
};
export const getTMNT = id => {
  return get('')
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.img,
      weapon: json.weapon,
      coolFactor: json.coolFactor
    }));
};
