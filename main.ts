namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Door = SpriteKind.create()
    export const Narrator = SpriteKind.create()
    export const potionMaterial = SpriteKind.create()
    export const spriteFinalPotion = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(spriteMain, 200, 200)
    animation.runImageAnimation(
    spriteMain,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    false
    )
})
function createBranch () {
    if (level == 1) {
        scene.placeOnRandomTile(spriteBranch, 7)
        spriteBranch.setFlag(SpriteFlag.Invisible, false)
        spriteBranch.z = 1
    } else {
        spriteBranch.setFlag(SpriteFlag.Invisible, true)
    }
}
function areaBeginning () {
    level = 0
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
        7 7 7 7 7 7 7 7 7 7 7 7 5 e e 7 
        7 7 7 3 2 8 7 b 7 e 7 e e f f e 
        7 e 7 1 4 1 7 7 7 e e f . f f e 
        b 7 7 7 d 7 7 7 e f f f f f . f 
        7 e 7 7 d d e e f f f . f . f f 
        7 7 e 7 d d 7 b f . f f f f f f 
        7 7 7 d d d 7 7 e f f f . f f 5 
        7 7 7 d d d d 7 7 e f f f f f 7 
        7 e 7 d d d d d d 7 7 7 7 7 7 7 
        b 7 7 d d 7 d d d d d 7 7 7 e 5 
        5 7 7 d d 7 7 7 d d d d d 7 7 e 
        7 e 7 d d 7 5 7 5 7 d d d d d 9 
        5 e 7 d d 7 7 5 7 7 7 7 d d d 9 
        5 7 5 d d d 7 7 7 7 7 5 7 7 5 7 
        e 5 7 d d d 7 7 b 5 7 7 7 e b 5 
        b e 5 7 a a 7 e 5 7 7 7 e 5 7 7 
        `)
    scene.setTile(7, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
        7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7 
        7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 
        7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 
        7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
        7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7 
        7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5 
        `, false)
    scene.setTile(14, img`
        7 7 7 7 7 7 7 c c 7 7 7 7 7 7 7 
        7 7 7 7 c c c 6 5 c 6 6 7 7 7 7 
        7 7 7 7 c 6 c 5 5 c 7 6 7 7 7 7 
        7 7 7 6 c c 7 5 5 7 c 6 6 7 7 7 
        7 7 c c 7 7 7 7 7 5 7 7 c 6 7 7 
        7 6 6 6 c 6 7 7 7 7 6 c c 6 6 7 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        7 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 
        7 c 7 7 6 6 7 6 6 7 7 6 7 7 c 7 
        7 c c c c 7 7 6 f 7 7 c c c c 7 
        7 7 7 7 c 7 c f f c 7 c 7 7 7 7 
        7 7 7 7 7 6 f e e e c 7 7 7 7 7 
        7 7 7 7 7 e e e e e e 7 7 7 7 7 
        7 7 7 7 e e 7 e e 7 e e 7 7 7 7 
        7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 
        `, true)
    scene.setTile(11, img`
        7 7 7 7 7 7 7 7 7 b b b b 7 7 7 
        7 7 7 7 7 7 b b b d d d d b 7 7 
        7 7 7 7 7 7 b d d d d d d b 7 7 
        7 7 7 7 b b d d d d d b b d 7 7 
        7 7 7 7 b d d d d d d b b d b 7 
        7 7 7 7 c d d d d d b b d b c 7 
        7 7 7 b c c b b b b d d b c c 7 
        7 7 b b c c c b d d b c c c c 7 
        7 b b d d d b b b b b b c c c c 
        7 c d d d d d d b d b c c c b c 
        7 c b d d d b b d b c c c b b c 
        c b c c c c b d d b b b b b c c 
        c c b b b d d b c c b b b b c c 
        c c c c c c c c c b b b b c c 7 
        7 c c c c b b b b b b b c c 7 7 
        7 7 7 7 c c c c c c c c 7 7 7 7 
        `, true)
    scene.setTile(5, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 
        7 7 7 1 1 7 7 7 7 7 7 7 1 7 1 7 
        7 7 3 1 1 3 7 7 7 5 7 7 6 1 6 7 
        7 1 1 6 6 1 1 7 7 5 7 7 7 7 7 7 
        7 d 1 7 7 1 d 7 7 6 7 7 7 7 7 7 
        7 6 3 1 1 3 6 7 7 7 7 5 7 7 7 7 
        7 7 6 d d 6 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 1 7 7 5 6 7 7 7 7 
        7 7 7 7 7 7 1 7 1 7 7 7 1 1 7 7 
        7 7 1 7 7 7 6 1 6 7 7 3 1 1 3 7 
        7 1 7 1 7 7 7 7 7 7 1 1 6 6 1 1 
        7 6 1 6 7 7 7 7 7 7 d 1 7 7 1 d 
        7 7 7 7 7 7 7 7 7 7 6 3 1 1 3 6 
        7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(13, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, false)
    scene.setTile(10, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(9, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(2, assets.tile`myTile7`, true)
    scene.setTile(1, assets.tile`myTile2`, true)
    scene.setTile(3, assets.tile`myTile5`, true)
    scene.setTile(8, assets.tile`myTile6`, true)
    scene.setTile(4, assets.image`Door`, true)
    scene.setTile(15, img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, false)
    scene.setTile(0, img`
        9 9 9 9 9 9 9 9 9 9 8 8 9 9 9 9 
        9 9 9 8 8 9 9 9 9 9 8 8 9 9 9 9 
        9 9 9 8 7 8 9 9 9 8 7 8 9 9 9 9 
        9 9 9 8 7 6 8 9 8 8 7 8 9 9 9 9 
        9 9 9 8 6 7 8 9 8 7 7 8 9 8 8 9 
        9 9 9 8 8 7 8 8 8 7 7 8 9 8 6 8 
        8 8 8 8 8 7 6 8 6 7 6 8 8 8 8 6 
        6 8 8 8 8 7 7 8 7 7 8 8 6 7 8 6 
        8 8 8 8 8 7 7 8 7 6 8 7 7 6 8 8 
        7 6 8 8 8 6 7 6 7 6 6 7 6 8 8 7 
        8 8 8 7 6 6 7 6 7 6 7 7 8 8 7 7 
        8 6 8 7 7 6 7 8 7 6 7 6 8 7 7 8 
        8 6 6 8 7 6 7 8 6 6 7 8 6 7 8 8 
        8 6 6 8 7 8 7 8 6 6 9 9 6 6 8 6 
        8 9 9 9 9 8 9 9 9 9 9 9 9 9 9 6 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, true)
    createWater()
    createMushroom()
    createBranch()
    createShell()
}
function areaVillage () {
    level = 2
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeee6666eeeeeeeeeeeeeeeeee66eee
        eee666666666eeeeeeeeeeeeee6666ee
        eee63256e6666eeeeeeeeeeee66666ee
        eee614166666666666eeeeeee63256ee
        e6666d666666e66666ee6666661416ee
        e666dddddddddddd66666666666d66ee
        e66dd666d666666ddd666666666d66ee
        e6666666dd66e6666ddd6666666d66ee
        e6666666d6666666666d666666dd666e
        ee66666dd6666666666ddddddddd666e
        eee6666d6666666666e6d6ddd66dd66e
        eeee66dde66666666666d6666666d6ee
        eeee6dd6e66632566666d666e666d6ee
        eeee6dddee6614166666d6e6666dd6ee
        66ee66dd6666dd666dddd666666d66ee
        666666ddd6dddddddd6dd666666d666e
        66666666ddddddddd666ddd66ddd666e
        666666666dd6666b666666ddddd6666e
        9ddddd666dd66667666666dd6666666e
        9dddddddddd666fc866666dd6666666e
        66666ddddd6666c.c66666ddd666666e
        eee66666dd666fccc86666dddd66666e
        eeee6666dddd6cc4cc6666d66dd666ee
        eee66666ddddd66666666dd666dd6eee
        ee666666d66ddddddddddd66666d6eee
        ee66666dd666666ddd666666666dd6ee
        ee6666dd66666666dddd6666666dd6ee
        ee66dddd666666666ddd6666666dd6ee
        eee6666666eeee666ddd66666ddd66ee
        eeeee6666eeeee6666dd66666eeeeeee
        eeeeeeeeeeeeeee666aa66eeeeeeeeee
        `)
    scene.setTile(14, assets.tile`myTile13`, true)
    scene.setTile(13, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, false)
    scene.setTile(6, img`
        7 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
        6 6 6 7 6 7 7 6 6 6 6 6 7 6 6 6 
        6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 6 
        6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 6 
        6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 7 7 6 6 6 
        6 6 6 6 6 6 6 6 6 6 7 7 8 6 6 6 
        6 6 6 6 6 6 6 6 7 7 6 8 6 6 6 6 
        6 6 6 6 6 6 6 6 6 7 7 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 7 
        6 6 7 6 6 6 6 6 6 6 6 6 6 6 6 7 
        `, false)
    scene.setTile(2, assets.tile`myTile7`, true)
    scene.setTile(1, assets.tile`myTile2`, true)
    scene.setTile(3, assets.tile`myTile15`, true)
    scene.setTile(5, assets.tile`myTile14`, true)
    scene.setTile(4, assets.image`Door`, true)
    scene.setTile(10, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(9, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(12, img`
        f c c c f f f f c c c c f f c c 
        f f c c f f c c f c c c f c c c 
        c c f c f c c c f f c f f c c c 
        c c f f f f f f f f f f c c c c 
        c f f c c c f f c c c f f c f f 
        f f f c c c f c c c c c f f f c 
        c f c f f c f c c c c c c c f c 
        c c c c f f f f f f f f f f f f 
        c c c c f f c c f f f f c c c f 
        c c c f f f c c f c c c f c c f 
        f f f f c f f f c c c c f f f f 
        c c f c c c f f f f f c c f f c 
        c c f f c c f c c c f f f f c c 
        c c f f f f f c c c f f f c c c 
        c f f c c f f f c c f c f f c c 
        c f c c c c c f f f f c c f f c 
        `, true)
    scene.setTile(0, img`
        c c f c c c c c c c c f c c c f 
        f f f c 1 1 1 1 1 1 1 1 c c f c 
        f f c 1 9 9 9 d d 9 9 9 1 c f c 
        c c 1 9 9 9 9 d d 9 9 9 9 1 f f 
        c 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        c 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        f 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        f 1 d d d d d d d d d d d d 1 c 
        c 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        c 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        c 1 9 9 9 9 9 d d 9 9 9 9 9 1 c 
        c c 1 9 9 9 9 d d 9 9 9 9 1 c c 
        c f c 1 9 9 9 d d 9 9 9 1 c f f 
        f f c c 1 1 1 1 1 1 1 1 c c c f 
        f c c f c c c c c c c c c c c f 
        c c c f f c c c c c c c f f f f 
        `, true)
    scene.setTile(11, img`
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        `, true)
    scene.setTile(7, img`
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        6 6 6 6 6 5 5 5 5 5 5 6 6 6 6 6 
        `, true)
    scene.setTile(15, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 c c c c c f 
        6 6 6 6 6 6 6 c c c f c c f f f 
        6 6 6 6 c c f c c c c f c f c c 
        6 6 6 c c c f f f c c c f f f c 
        6 6 c f c c c c f c c c c c f f 
        6 c c f c c c f f f f f c c f f 
        6 c c f c c f f c c c f c f f c 
        f f f f f f c c c c c f f f c c 
        f c c c f f c c f f f f c c f c 
        f c c c c f f c f c c c c c f f 
        c c f f f f c f f c c c c c c f 
        `, true)
    scene.setTile(8, img`
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        f c c c c c 6 6 6 6 6 6 6 6 6 6 
        f f f c c f c c c 6 6 6 6 6 6 6 
        c c f c f c c c c f c c 6 6 6 6 
        c f f f c c c f f f c c c 6 6 6 
        f f c c c c c f c c c c f c 6 6 
        f f c c f f f f f c c c f c c 6 
        c f f c f c c c f f c c f c c 6 
        c c f f f c c c c c f f f f f f 
        c f c c f f f f c c f f c c c f 
        f f c c c c c f c f f c c c c f 
        f c c c c c c f f c f f f f c c 
        `, true)
    createMushroom()
    createBranch()
    createShell()
    createWater()
}
function areaForest () {
    level = 1
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
        7777aa77777777eeeeeeeeeeeeeeeeee
        e7777d77777777ee77eeeee777eeeeee
        e77d77777777eeee7777eee77777eeee
        ee777d7777eeeeeeeee77777e7777eee
        eee777777777ee777ee7777eee7777ee
        eeee77d77e77777777777eeeeeeeeeee
        eeeed7eeeeeee77777777eeeee7eeeee
        eee777eeeeeeee777777eeeee777eeee
        eee7deeeeeeeeee77eeeeeee77d77eee
        eeed7eeeeeeeeee7d777777d777d77ee
        eee77eeeeeeeeee77d77d7777ee777ee
        eee77eeeeeeeee77e77777eeeeeed7ee
        eeed7eeeeeeeee7deeeeeee777ee77ee
        eee7d7eeeeeeee7eeeee7777777e77ee
        eeee77ee77777edeeeee7777e7777eee
        eeeee7d77777777eeeeee777ee777eee
        eeeeee7777d7777eeeeeeeeeeeed7eee
        eeeee777d7777777eeee77eeee777d7e
        eeeee777777eeee7eee7777eee77e7d9
        eeeee777eeeeeee77ee77777ee77ee79
        eeeee77eeeeeeeee7ee77777eeeeeeee
        eeeeee77eeeeeeee77ee77eeeeeeeeee
        ee7eeee77eeeee77777777eeeeeeeeee
        ee77eee77eeee777e7777eeee777eeee
        e7777777eeeee77eee77eeee77777eee
        e777777eeeee777eee77777777ee77ee
        e77777eeeee777eeeee777777eeee7ee
        ee77eeeeee7777eeeeee7777eeee77ee
        ee7eeeeeee77eeeeeeeeeeeeeee77eee
        eeeeeeeeee77eeeeeeeeeeeeeee77eee
        eeeeeeeeeee7eeeeeeeeeeeeeeee7eee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    scene.setTile(7, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
        7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7 
        7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 
        7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 
        7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
        7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7 
        7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5 
        `, false)
    scene.setTile(14, img`
        7 7 7 7 7 7 7 c c 7 7 7 7 7 7 7 
        7 7 7 7 c c c 6 5 c 6 6 7 7 7 7 
        7 7 7 7 c 6 c 5 5 c 7 6 7 7 7 7 
        7 7 7 6 c c 7 5 5 7 c 6 6 7 7 7 
        7 7 c c 7 7 7 7 7 5 7 7 c 6 7 7 
        7 6 6 6 c 6 7 7 7 7 6 c c 6 6 7 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        7 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 
        7 c 7 7 6 6 7 6 6 7 7 6 7 7 c 7 
        7 c c c c 7 7 6 f 7 7 c c c c 7 
        7 7 7 7 c 7 c f f c 7 c 7 7 7 7 
        7 7 7 7 7 6 f e e e c 7 7 7 7 7 
        7 7 7 7 7 e e e e e e 7 7 7 7 7 
        7 7 7 7 e e 7 e e 7 e e 7 7 7 7 
        7 7 7 7 7 7 7 e e 7 7 7 7 7 7 7 
        `, true)
    scene.setTile(13, img`
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 6 7 7 6 6 6 7 6 7 7 7 7 
        7 7 7 6 d 6 6 6 d d 6 d 6 6 7 7 
        7 6 7 d d d d d d d d d d d 6 7 
        7 6 6 d d d d d 1 d d d d d 7 7 
        7 7 6 d d b d d d d d b d 6 7 7 
        7 7 d d d d d d d d d d d 6 6 7 
        7 6 d d d d d d d d d d d d 6 7 
        7 6 d d d d d d d d b d d d 7 7 
        7 7 6 d 1 d d d d d d d d d 6 7 
        7 6 d d d d d d d d d d d d 6 7 
        7 d d d d d b b d d d d d d 7 7 
        7 6 d d d d d d d d d d d 6 6 7 
        7 7 6 6 d d d d 6 d d d d d 6 7 
        7 6 d d 6 6 6 6 d 6 6 d 6 6 6 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        `, false)
    scene.setTile(10, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
        7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7 
        7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 
        7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 
        7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
        7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7 
        7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5 
        `, true)
    scene.setTile(9, img`
        5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
        7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7 
        7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 
        7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 
        7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
        7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 
        7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7 
        7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
        7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5 
        `, true)
    spriteMain.setPosition(80, 10)
    createWater()
    createMushroom()
    createBranch()
    createShell()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("x = " + Math.trunc(spriteMain.x) + " y = " + Math.trunc(spriteMain.y))
})
function createShell () {
    if (level == 3) {
        scene.placeOnRandomTile(spriteShell, 5)
        spriteShell.setFlag(SpriteFlag.Invisible, false)
        spriteShell.z = 1
    } else {
        spriteShell.setFlag(SpriteFlag.Invisible, true)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(spriteMain, 200, 200)
    animation.runImageAnimation(
    spriteMain,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    true
    )
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    if (level == 0 && game.ask("Go to the Forest?")) {
        areaForest()
        spriteMain.setPosition(80, 5)
    } else if (level == 1 && game.ask("Go to Home?")) {
        areaBeginning()
        spriteMain.setPosition(74, 235)
    } else if (level == 3 && game.ask("Go to Village?")) {
        areaVillage()
        spriteMain.setPosition(314, 479)
    } else if (level == 2 && game.ask("Go to Ocean?")) {
        areaOcean()
        spriteMain.setPosition(316, 36)
    }
})
info.onCountdownEnd(function () {
	
})
function createWater () {
    if (level == 0) {
        scene.placeOnRandomTile(spriteWater, 15)
        spriteWater.setFlag(SpriteFlag.Invisible, false)
        spriteWater.z = 1
    } else {
        spriteWater.setFlag(SpriteFlag.Invisible, true)
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(spriteMain, 200, 200)
    animation.runImageAnimation(
    spriteMain,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spriteFinalPotion, function (sprite, otherSprite) {
    game.splash("You made a potion of your dream!")
    game.over(true)
})
function areaOcean () {
    level = 3
    scene.setBackgroundColor(13)
    scene.setTileMap(img`
        5555555555555555555aa55555555555
        55555555755555555555d55557555555
        55555555555555555555d55557755555
        55755555ddddddd5555dd55555555555
        577555ddd55555ddd55d555555555555
        55555dd555555555dd5d555555d55555
        55555d55555555555ddd55555dd55755
        55555d5555555555dddddddddd555555
        5555dd555555ddddd555555555555588
        5555d55555ddd5555555555555888888
        5555d555ddd555555555555588888888
        5555d55ddddddd555555588888888888
        5555dddd55555dddd588888888888888
        5555dd55555555558888888888888888
        555ddd55575555588888888888888888
        55dd5555755555888888888888888888
        55d55555555558888888888888888888
        55d55555555588888888888888888888
        9dd55555555888888888888888888888
        95555555888888888888888888888888
        55555558888888888888888888888888
        55555588888888888888888888888888
        55555588888888888888888888888888
        55575588888888888888888888888888
        55555588888888888888888888888888
        55555588888888888888888888888888
        55555888888888888888888888888888
        55555888888888888888888888888888
        55558888888888888888888888888888
        55588888888888888888888888888888
        88888888888888888888888888888888
        88888888888888888888888888888888
        `)
    scene.setTile(8, img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, true)
    scene.setTile(13, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, false)
    scene.setTile(5, img`
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d 1 
        d 1 d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d 1 d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d 1 d d d d d d d d d d d 1 d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d 1 d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        `, false)
    scene.setTile(7, img`
        d d d d d d 6 6 6 6 d d d d d d 
        d d d d d c 6 7 7 6 c d d d d d 
        d d d d c 6 7 5 7 7 6 c d d d d 
        d d 6 6 c c 6 5 5 6 c c 6 6 d d 
        6 6 6 5 5 5 6 7 5 6 5 5 7 6 6 6 
        6 6 7 7 7 5 7 6 7 5 5 7 7 7 7 6 
        d c c c 6 6 7 6 6 5 7 6 c c 6 d 
        6 c 6 6 6 6 6 c c 6 6 6 6 6 c 6 
        6 6 7 7 7 c c c c c c 7 7 7 6 6 
        6 7 7 7 6 6 c c c c 6 6 7 7 7 6 
        c 6 c c 6 7 6 c c 6 7 6 c c 6 c 
        d c c 5 5 7 6 7 7 6 7 5 5 c c d 
        d c 6 7 5 5 6 7 7 6 5 5 7 6 c d 
        d 6 6 7 7 6 6 5 5 6 6 7 7 6 6 d 
        d d 6 6 6 6 c 6 7 6 c 6 6 6 d d 
        d d d 6 6 c d 6 6 6 d c 6 d d d 
        `, true)
    scene.setTile(10, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    scene.setTile(9, img`
        d d d d d d d d d d d d d d d d 
        d d d 1 1 d d d d d d d d b d d 
        d d d 1 1 d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d b d d d d d d b b d d d d d 
        d d d d d d d d d b b d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d b d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d d d d d 
        1 1 d d d d d d d d d d b d d d 
        d d d d d d 1 d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d b d 
        `, true)
    createWater()
    createMushroom()
    createBranch()
    createShell()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(spriteMain, 200, 200)
    animation.runImageAnimation(
    spriteMain,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    200,
    true
    )
})
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    if (level == 0 && game.ask("Go to the Village?")) {
        areaVillage()
        spriteMain.setPosition(20, 330)
    } else if (level == 2 && game.ask("Go to Home?")) {
        areaBeginning()
        spriteMain.setPosition(225, 189)
    } else if (level == 1 && game.ask("Go to Ocean?")) {
        areaOcean()
        spriteMain.setPosition(23, 289)
    } else if (level == 3 && game.ask("Go to Forest?")) {
        areaForest()
        spriteMain.setPosition(487, 300)
    }
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    if (countMaterials == 4) {
        if (level == 2 && game.ask("Make Potion?")) {
            spritePotion = sprites.create(img`
                . . . . 2 . 2 . 2 . . . 2 . . . 
                . . . 2 . . 2 . . . 2 . . . . . 
                . . . . 2 . . 2 . 2 . 2 . . . . 
                . . . . . . 2 . . . 2 . . . . . 
                . . . f 9 f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . . 6 6 6 6 6 6 6 6 . . . . 
                . . . . f f f f f f f f . . . . 
                . . . f f 9 f f f f f f f . . . 
                . . . f 9 f f f f f f f f . . . 
                . . . f 9 f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f f . . . 
                . . . f f f f f f f f f 6 . . . 
                . . . f f f f f f f f f 6 . . . 
                . . . . f 6 6 6 6 6 6 6 . . . . 
                `, SpriteKind.spriteFinalPotion)
            spritePotion.setPosition(323, 336)
            game.splash("Go to the church to collect your potion!")
        } else if (level != 2) {
            game.splash("You can't make a potion here")
        }
    } else {
        game.splash("You haven't collected enough materials!")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.potionMaterial, function (sprite, otherSprite) {
    otherSprite.destroy()
    countMaterials += 1
    if (level == 0) {
        game.splash("You collected Fresh Water!")
    } else if (level == 1) {
        game.splash("You collected Otherworldly Branch!")
    } else if (level == 2) {
        game.splash("You collected Funny Mushroom!")
    } else if (level == 3) {
        game.splash("You collected Diamond Seashell!")
    }
})
function createMushroom () {
    if (level == 2) {
        scene.placeOnRandomTile(spriteMushroom, 6)
        spriteMushroom.setFlag(SpriteFlag.Invisible, false)
        spriteMushroom.z = 1
    } else {
        spriteMushroom.setFlag(SpriteFlag.Invisible, true)
    }
}
let spritePotion: Sprite = null
let level = 0
let spriteMain: Sprite = null
let spriteShell: Sprite = null
let spriteBranch: Sprite = null
let spriteMushroom: Sprite = null
let spriteWater: Sprite = null
let countMaterials = 0
countMaterials = 4
spriteWater = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c f . . . . . . . 
    . . . . . . . c c . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . c b b c c c . . . . . 
    . . . . . c b c c c c . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . c c c c c f . . . . . 
    . . . . . . c f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.potionMaterial)
spriteMushroom = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 3 c c . . . . . . 
    . . . . . 3 3 3 3 f c . . . . . 
    . . . . 3 3 1 3 3 1 c c . . . . 
    . . . 3 3 3 3 3 3 3 3 3 1 . . . 
    . . . 3 1 3 1 3 3 3 1 3 3 . . . 
    . . . . 3 3 3 3 1 3 3 f c . . . 
    . . . . . d 3 3 3 d c c . . . . 
    . . . . d d d d d d d . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . d d d d d d d . . . . . . 
    . . . d d d d d d . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.potionMaterial)
spriteBranch = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 1 . . . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . . 1 1 1 1 . . . . d d . . 
    . . . . d d 1 1 1 . . d d d . . 
    . . d d d d d 1 1 1 d d d . . . 
    . . d d . . . . 1 1 1 d . . . . 
    . . . . . . . . . 1 1 1 . . . . 
    . . . . . . . . . 1 1 1 1 . . . 
    . . . . . . . . . . 1 1 1 1 . . 
    . . . . . . . . . . . 1 1 1 1 1 
    . . . . . . . . . . . 1 1 1 1 1 
    `, SpriteKind.potionMaterial)
spriteShell = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . c c c . . 
    . . . . . . . . . . c 8 8 c f . 
    . . . . . . . . . c 8 1 1 9 f f 
    . . . . . . . . c 8 c c c c 8 f 
    . . . . . . . c c c c 1 9 c c f 
    . . . . . . c 8 8 1 1 1 9 9 c f 
    . . . . . c 8 8 1 1 1 1 9 9 c f 
    . . . . c 8 c c c c 1 9 9 9 8 f 
    . . . c c c c 1 1 c 1 9 9 9 8 f 
    . . c 8 8 1 1 1 1 c c c 9 9 8 f 
    . c 8 8 1 1 1 1 1 9 9 c 9 8 f f 
    c 8 8 9 f f f 1 9 9 9 c 8 8 f . 
    c 8 9 f f f f f 9 9 9 8 8 c . . 
    c 8 f f f f f f f 9 9 8 c . . . 
    . c c . f f f c c c c c c . . . 
    `, SpriteKind.potionMaterial)
spriteWater.setFlag(SpriteFlag.Invisible, true)
spriteMushroom.setFlag(SpriteFlag.Invisible, true)
spriteBranch.setFlag(SpriteFlag.Invisible, true)
spriteShell.setFlag(SpriteFlag.Invisible, true)
spriteWater.setPosition(0, 0)
spriteMushroom.setPosition(0, 0)
spriteShell.setPosition(0, 0)
spriteBranch.setPosition(0, 0)
spriteMain = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
spriteMain.setPosition(80, 60)
spriteMain.z = 2
scene.cameraFollowSprite(spriteMain)
areaBeginning()
