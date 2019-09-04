
const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Try harder';

      return json;
    });
};

export const getMLPData = id => {
  return get('https://mlp-vs-tmnt.herokuapp.com/api/v1/mlp')
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.img,
      cutieMark: json.cutieMark,
      coolFactor: json.coolFactor
    }));
};
export const getTMNTData = id => {
  return get('https://mlp-vs-tmnt.herokuapp.com/api/v1/tmnt')
    .then(json => ({
      id: json._id,
      name: json.name,
      image: json.img,
      weapon: json.weapon,
      coolFactor: json.coolFactor
    }));
};
