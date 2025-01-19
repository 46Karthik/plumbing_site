import React from 'react';
import "./ProjectTitle.css";

const ProjectTitle = ({ index, title }) => {
    const words = title.split(' ');
    const wordCount = words.length;

    const applyColors = (words) => {
        const coloredWords = words.map((word, i) => {
            let colorClass = '';

            if (index == 0) {
                if (i < 3) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 3) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 1) {
                if (i < 2) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 2) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 2) {
                if (i < 4) {
                    colorClass = 'text-blacktext';
                } else if (i >= wordCount - 4) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-orangetext';
                }
            }
            if (index == 3) {
                if (i < 4) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 5) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 4) {
                if (i < 3) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 2) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 5) {
                if (i < 3) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 1) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 6) {
                if (i < 2) {
                    colorClass = 'text-orangetext';
                } else if (i >= wordCount - 4) {
                    colorClass = 'text-bluetext';
                } else if (i >= Math.floor(wordCount / 2) - 1 && i <= Math.floor(wordCount / 2) + 1) {
                    colorClass = 'text-blacktext';
                }
            }
            if (index == 7) {
                if (i < 3) {
                    colorClass = 'text-orangetext';
                } else if (i >= 3 && i <= 7) {
                    colorClass = 'text-bluetext';
                } else {
                    colorClass = 'text-blacktext';
                }
            }
            return (
                <span key={i} className={colorClass}>
                    {word} { }
                </span>
            );
        });

        return coloredWords;
    };

    return (
        <div className="project-title flex gap-8 items-center mb-4">
            <span className=" flex items-center justify-center text-2xl h-16 w-12 montserrat-regular">
              {
                index < 10 ? `0${index + 1}` : index + 1
              }  
            </span>
            <p className="text-xl montserrat-regular tracking-wide  inline capitalize ">
                {applyColors(words)}
            </p>
        </div>
    );
}

export default ProjectTitle;

