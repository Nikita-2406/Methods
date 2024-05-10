import Bowerman from "../class/Bowerman";

test("testing Bowerman", () => {
    const result = new Bowerman('bowman')
    result.damage(20)
    result.levelUp()
    const ans = {
        name: 'bowman',
        type: "Bowerman",
        health: 100,
        level: 2,
        attack: 30,
        defence: 30,
    }
    expect(result).toEqual(ans)
})