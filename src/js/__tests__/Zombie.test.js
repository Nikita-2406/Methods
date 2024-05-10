import Zombie from "../class/Zombie";

test("testing Zombie", () => {
    const result = new Zombie('zomb')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'zomb',
        type: "Zombie",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }
    expect(result).toEqual(ans)
})