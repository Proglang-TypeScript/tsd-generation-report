SHELL=/bin/sh
DOC=main

.SUFFIXES:
.SUFFIXES: .bib .pdf .tex
.PHONY: clean

run: $(DOC).pdf

$(DOC).pdf: $(DOC).bbl $(DOC).tex
	pdflatex $(DOC) -draftmode
	pdflatex $(DOC) 

$(DOC).bbl: $(DOC).aux
	bibtex $(DOC)

$(DOC).aux: $(DOC).bib
	pdflatex $(DOC) -draftmode
	pdflatex $(DOC) -draftmode

clean:
	rm -rf *.aux *.lof *.log *.lot *.toc *.bbl *.blg *.vtc *.out $(DOC).pdf
