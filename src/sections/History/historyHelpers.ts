// Helper function to get context content based on year
export function getContextContent(year: number, type: string): string | string[] {
    // Define context data for different eras
    const eras = [
        { end: 300, figures: ["Apostles", "Ignatius of Antioch", "Justin Martyr"], social: "Roman Empire, Persecutions", intellectual: "Apologists, Gnosticism" },
        { end: 600, figures: ["Constantine", "Augustine", "Jerome", "Leo the Great", "Athanasius"], social: "Legalization, Fall of Western Rome", intellectual: "Ecumenical Councils, Christology, Trinity" },
        { end: 1000, figures: ["Gregory the Great", "Charlemagne", "Benedict of Nursia"], social: "Rise of Islam, Feudalism, Monasticism", intellectual: "Carolingian Renaissance, Iconoclasm" },
        { end: 1300, figures: ["Gregory VII", "Anselm", "Bernard of Clairvaux", "Innocent III", "Aquinas", "Francis of Assisi"], social: "Crusades, Investiture Controversy, Universities", intellectual: "Scholasticism, Gothic Architecture" },
        { end: 1500, figures: ["Catherine of Siena", "Thomas à Kempis", "Popes of Avignon/Schism"], social: "Avignon Papacy, Western Schism, Black Death, Renaissance", intellectual: "Humanism, Mysticism" },
        { end: 1700, figures: ["Luther", "Calvin", "Ignatius of Loyola", "Teresa of Ávila", "Council of Trent Fathers"], social: "Reformation, Counter-Reformation, Wars of Religion", intellectual: "Baroque, Early Science" },
        { end: 1900, figures: ["Vincent de Paul", "John Henry Newman", "Pius IX", "Leo XIII"], social: "Enlightenment, Revolutions (French, American), Industrialization", intellectual: "Rationalism, Ultramontanism, Rerum Novarum" },
        { end: 2100, figures: ["Pius X", "Thérèse of Lisieux", "John XXIII", "Paul VI", "John Paul II", "Benedict XVI", "Francis"], social: "World Wars, Vatican II, Cold War, Globalization", intellectual: "Modernism Crisis, Ressourcement, Liberation Theology" }
    ];

    // Find the relevant era
    const currentEra = eras.find(era => year <= era.end);
    // Handle case where year is before the first era's end (e.g., year 0)
    if (!currentEra && year < eras[0]?.end) {
        // Optionally return specific content for very early years or the first era's content
        const firstEra = eras[0];
        return firstEra ? (firstEra[type] || "N/A") : "Context data not available.";
    }
    if (!currentEra) return "Context data not available for this period."; // Handle future dates or gaps

    // Return the requested content type
    return currentEra[type] || "N/A";
}