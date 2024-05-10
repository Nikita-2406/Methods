import Swordsman from "../class/Swordsman";

test("testing Swordsman", () => {
    const result = new Swordsman('sword')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'sword',
        type: "Swordsman",
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    }
    expect(result).toEqual(ans)
})