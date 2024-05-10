import Magician from "../class/Magician";

test("testing Magician", () => {
    const result = new Magician('mag')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'mag',
        type: "Magician",
        health: 100,
        level: 2,
        attack: 12,
        defence: 48,
    }
    expect(result).toEqual(ans)
})