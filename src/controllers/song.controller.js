const catchError = require('../utils/catchError');
const Song = require('../models/Song');

const getAll = catchError(async(req, res) => {
    // Operaciones...
    const song = await Song.findAll()
    return res.json(song)
});

const create = catchError(async (req, res) => {
    const {name, artist,  releaseDate} = req.body;
    const createSongs = await Song.create({
        name,
        artist,
        releaseDate
    });
    return res.status(201).json(createSongs)
})

const deleteSong = catchError(async (req, res) => {
    const {id} = req.params;
 const song =   await Song.destroy({where : {id}})
    if (song === 0) return res.status(404).json({message:'song not found'})
 return res.sendStatus(204)
})

const getOne = catchError(async(req, res) =>{
    const {id} = req.params;
    const getOneSong = await Song.findByPk(id)
    if (!getOneSong) return res.status(204).json({message:'song not found'})
    return res.json(getOneSong)
})
const update = catchError(async(req, res) => {
    const {id} = req.params;
    const {name,artist,releaseDate} = req.body
    const getUpdate = await Song.update(
        {name,artist,releaseDate},
        {where: {id}, returning: true}
    )
    if (getUpdate[0] === 0) return res.status(204).json({message: 'song not found'})
    return res.json(getUpdate[1][0])
})
module.exports = {
    getAll,
    create ,
   deleteSong,
   getOne,
   update
}