module.exports.generateTagsSpec = (tags) => {
  return tags.map((t) => {
    return {
      name: t,
    };
  });
};

module.exports.matchingTags = (tagsSpec, path) => {
  return tagsSpec
    .filter((t) => {
      let mypath = path.toLowerCase();
      let myname = t.name.toLowerCase();
      let regex = new RegExp(`\\/${myname}(\\/|\\?|$)`);
      return regex.test(mypath);
    })
    .map((t) => t.name);
};
