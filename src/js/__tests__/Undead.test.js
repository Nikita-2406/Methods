import Undead from "../class/Undead";

test("testing Undead", () => {
    const result = new Undead('und')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'und',
        type: "Undead",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    }
    expect(result).toEqual(ans)
})